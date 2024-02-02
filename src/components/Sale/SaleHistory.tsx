import { Flex, Select, Spin } from "antd"
import { useGetSaleHistoryQuery } from "../../redux/features/sale/saleApi"
import SaleHistoryCard from "./SaleHistoryCard"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setFilterCategoies } from "../../redux/features/sale/saleSlice"
import { isSameDay, isSameWeek, isSameMonth, isSameYear } from "date-fns";

const SaleHistory = () => {
    
    const {data,isLoading} = useGetSaleHistoryQuery("")
    const dispatch = useAppDispatch()
    const filterBy = useAppSelector((state)=> state.sale.filterCategory)
    const handleChange = (value: string) => {
        dispatch(setFilterCategoies(value))
      };

      const filterDataByDate = (data : any, filterBy : string) => {
        const currentDate = new Date();
    
        return data?.filter((item : any) => {
          const saleDate = new Date(item.saleDate);
          switch (filterBy) {
            case "daily":
              return isSameDay(saleDate, currentDate);
            case "weekly":
              return isSameWeek(saleDate, currentDate);
            case "monthly":
              return isSameMonth(saleDate, currentDate);
            case "yearly":
              return isSameYear(saleDate, currentDate);
            default:
              return true;
          }
        });
      };
      const filteredData = filterDataByDate(data?.data || [], filterBy);

      if (isLoading) {
        return (
          <Flex justify="center" align="center">
            <Spin size="large" />
          </Flex>
        );
      }
     
  return (
    <div> 
        <Flex style={{marginTop : "20px"}} align={"center"} vertical={false} justify={"end"} wrap={"wrap"} gap={"10px"}>
       <strong>Filter By Recent:</strong>
         <Select
      defaultValue=""
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'weekly', label: 'Week' },
        { value: 'daily', label: 'Day' },
        { value: 'monthly', label: 'Month' },
        { value: 'yearly', label: 'Year' },
      ]}
    />
    </Flex>
  
        <Flex style={{marginTop : "20px"}} vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>

{
    filteredData.length === 0 ? <h1>There is no sale in this timeframe</h1> :
filteredData?.map((item : any)=>{
return  <SaleHistoryCard item={item} /> 

})
}
</Flex>
</div>
  )
}

export default SaleHistory