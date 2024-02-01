import { Flex, Pagination, PaginationProps, Row } from "antd";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
import { useGetProductsByNameQuery } from "../../redux/features/product/productApi";
import SaleProductCard from "./SaleProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentPageForSale, setTotalPageForSale, setsearchTermForSale } from "../../redux/features/sale/saleSlice";

const CreateSale = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.sale.currentPage);
  const searchTerm = useAppSelector((state) => state.sale.searchTerm);
  const totalPage = useAppSelector((state) => state.sale.totalPage);
  const quantity = useAppSelector((state) => state.sale.saleItem.saleQuantity);

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
   dispatch(setsearchTermForSale(value))
  };
  const NameQueryObj = {
    searchTerm: searchTerm,
    totalPage: totalPage,
    currentPage: currentPage,
  };
  const { data } = useGetProductsByNameQuery(NameQueryObj);
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    dispatch(setTotalPageForSale(pageSize));
    dispatch(setCurrentPageForSale(current));
    console.log(totalPage, currentPage);
  };
  const showTotal: PaginationProps["showTotal"] = (total) =>
    `Total ${total} items`;
  console.log(data?.data)
  
  return (
    <div>
      <Row justify={"center"}>
        <Search
          style={{ width: "30rem", marginBottom: "20px" }}
          placeholder="Search You Product By Name"
          onSearch={onSearch}
          enterButton
        />
      </Row>
      <Flex vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>
        {data?.data?.result?.map((product: any) => {
          return (
            <SaleProductCard
              key={product?._id}
              product={product}
              quantity={quantity}
            ></SaleProductCard>
          );
        })}
      </Flex>
      <Flex
        justify={"center"}
        style={{ marginBottom: "30px", marginTop: "50px" }}
      >
        <Pagination
          showSizeChanger
          onChange={onShowSizeChange}
          defaultCurrent={1}
          showTotal={showTotal}
          total={data?.data?.meta.total}
          defaultPageSize={parseInt(totalPage!)}
          pageSizeOptions={[6, 9, 21]}
        />
      </Flex>
    </div>
  );
};

export default CreateSale;
