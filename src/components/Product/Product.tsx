import { Button, Flex, Spin, Input,Select } from "antd";
import {
  useDeleteMultipleProductsMutation,
  useGetAllProductsQuery,
} from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetSelectProduct } from "../../redux/features/product/productSlice";
import { toast } from "sonner";
import { useState } from "react";

const { Option } = Select;

const Product = () => {
  const Ids = useAppSelector((state) => state.product.selectedIds);
  const [deleteMultipleProducts] = useDeleteMultipleProductsMutation();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllProductsQuery("");

  // State for filters
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterReleaseDate, setFilterReleaseDate] = useState("");
  const [filterISBN, setFilterISBN] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterPublisher, setFilterPublisher] = useState("");
  const [filterSeries, setFilterSeries] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [filterBookFormat, setFilterBookFormat] = useState("");

  const filteredProducts = data?.data?.result?.filter((product: TProduct) => {

    if (filterAuthor && !product.author.toLowerCase().includes(filterAuthor.toLowerCase())) {
      return false;
    }

    if (filterReleaseDate && !product.releaseDate.includes(filterReleaseDate)) {
      
      return false;
    }

    if (filterISBN && product.isbn && product.isbn.toString() !== filterISBN) {
      return false;
    }

    if (filterGenre && !product.genre.toLowerCase().includes(filterGenre.toLowerCase())) {
      return false;
    }

    if (filterPublisher && !product.publisher.toLowerCase().includes(filterPublisher.toLowerCase())) {
      return false;
    }

    if (filterSeries && !product.series.toLowerCase().includes(filterSeries.toLowerCase())) {
      return false;
    }

    if (filterLanguage && !product.language.includes(filterLanguage)) {
      return false;
    }

    if (filterBookFormat && !product.bookFormat.includes(filterBookFormat)) {
      return false;
    }


    return true; // Include the product if it passes all filters
  });

  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <Spin size="large" />
      </Flex>
    );
  }

  const handleMultipleDelete = async () => {
    try {
      console.log(Ids);
      const res = await deleteMultipleProducts(Ids);
      console.log(res);
      dispatch(resetSelectProduct());
      toast.success("Products deleted successfully");
    } catch (e) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div>
      <Flex
        vertical={false}
        justify={"space-between"}
        wrap={"wrap"}
        gap={"20px"}
        style={{ marginBottom: "20px" }}
      >
        <Flex justify={"space-between"}
        wrap={"nowrap"}
        gap={"20px"}
        >

        <Input
          placeholder="Search Author"
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
        />
          <Input
          placeholder="2023-03-20"
          value={filterReleaseDate}
          onChange={(e) => setFilterReleaseDate(e.target.value)}
        />
        <Input
          placeholder="Search ISBN"
          value={filterISBN}
          onChange={(e) => setFilterISBN(e.target.value)}
        />
          <Input
          placeholder="Search Genre"
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        />
        </Flex>
      <Flex  vertical={false}
        justify={"space-between"}
        wrap={"nowrap"}
        align={"center"}
        gap={"20px"}
        style={{ marginBottom: "20px" }}>

        <Input
          placeholder="Search Publisher"
          value={filterPublisher}
          onChange={(e) => setFilterPublisher(e.target.value)}
        />
        <Input
          placeholder="Search Series"
          value={filterSeries}
          onChange={(e) => setFilterSeries(e.target.value)}
        />
                <p>Language</p>

        <Select
          placeholder="Select Language"
          value={filterLanguage}
          onChange={(value) => setFilterLanguage(value)}
        >
          {/* Add options dynamically based on available languages */}
          {data?.data?.result?.reduce((languages, product) => {
            product.language.forEach(lang => {
              if (!languages.includes(lang)) {
                languages.push(lang);
              }
            });
            return languages;
          }, []).map((lang) => (
            <Option key={lang} value={lang}>
              {lang}
            </Option>
          ))}
        </Select>
        <p>Book Format</p>
        <Select
          placeholder="Select Book Format"
          value={filterBookFormat}
          onChange={(value) => setFilterBookFormat(value)}
        >
          {/* Add options dynamically based on available book formats */}
          {data?.data?.result?.reduce((formats, product) => {
            product.bookFormat.forEach(format => {
              if (!formats.includes(format)) {
                formats.push(format);
              }
            });
            return formats;
          }, []).map((format) => (
            <Option key={format} value={format}>
              {format}
            </Option>
          ))}
        </Select>
</Flex>
        {/* Add more Filter UI Components as needed */}
        
        <h3 style={{ height: "35px" }}>
          Products : {filteredProducts?.length}
        </h3>
        {Ids?.length > 0 ? (
          <Button
            onClick={handleMultipleDelete}
            type="primary"
            style={{ padding: "5px 20px", backgroundColor: "#F31559" }}
          >
            Delete Selected
          </Button>
        ) : null}
      </Flex>
      <Flex vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>
        {filteredProducts?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Flex>
    </div>
  );
};

export default Product;