import {  Card} from "antd";



const SaleHistoryCard = ({item}) => {
    
 console.log(item)

  return (
    <>
      <Card title={item.productId.productName} bordered={false} style={{ width: 340 }}>
        <p>
          <strong>Sold Quantity:</strong> {item.saleQuantity}
        </p>
        <p>
          <strong>Sale Date:</strong> {item.saleDate}
        </p>
        <p>
          <strong>Buyer Name:</strong> {item.buyerName}
        </p>
  
      </Card>
    </>
  );
};

export default SaleHistoryCard;
