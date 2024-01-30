import { Flex, Select } from "antd"
import { useGetSaleHistoryQuery } from "../../redux/features/sale/saleApi"
import SaleHistoryCard from "./SaleHistoryCard"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setFilterCategoies } from "../../redux/features/sale/saleSlice"
import { isSameDay, isSameWeek, isSameMonth, isSameYear } from "date-fns";

const SaleHistory = () => {
    
    const {data} = useGetSaleHistoryQuery("")
    const dispatch = useAppDispatch()
    const filterBy = useAppSelector((state)=> state.sale.filterCategory)
    const handleChange = (value: string) => {
        dispatch(setFilterCategoies(value))
      };

      const filterDataByDate = (data, filterBy) => {
        const currentDate = new Date();
    
        return data.filter((item) => {
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

     
  return (
    <div> 
        <Flex style={{marginTop : "20px"}} align={"center"} vertical={false} justify={"end"} wrap={"wrap"} gap={"10px"}>
       <strong>Filter By:</strong>
         <Select
      defaultValue=""
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'weekly', label: 'Weekly' },
        { value: 'daily', label: 'Daily' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'yearly', label: 'Yearly' },
      ]}
    />
    </Flex>
  
        <Flex style={{marginTop : "20px"}} vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>

{
    filteredData.length === 0 ? <h1>There is no sale in this timeframe</h1> :
filteredData?.map((item)=>{
return  <SaleHistoryCard item={item} > </SaleHistoryCard>

})
}
</Flex>
</div>
  )
}

export default SaleHistory