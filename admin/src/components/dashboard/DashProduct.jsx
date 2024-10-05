import { Button, Table } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

export default function DashProduct() {
  // Dish dummy data
  const products = [
    {
      id: 1,
      name: "Chicken Biryani",
      image: "https://via.placeholder.com/150",
      category: "Main Course",
      price: 200,
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      image: "https://via.placeholder.com/150",
      category: "Main Course",
      price: 150,
    },
    {
      id: 3,
      name: "Veg Fried Rice",
      image: "https://via.placeholder.com/150",
      category: "Main Course",
      price: 100,
    },
    {
      id: 4,
      name: "Veg Manchurian",
      image: "https://via.placeholder.com/150",
      category: "Main Course",
      price: 120,
    },
    {
      id: 5,
      name: "Veg Noodles",
      image: "https://via.placeholder.com/150",
      category: "Main Course",
      price: 100,
    },
    {
      id: 6,
      name: "Veg Pulao",
      image: "https://via.placeholder.com/150",
      category: "Main Course",
      price: 150,
    },
  ];

  return (
    <div className="h-full bg-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-3xl font-semibold ">Products</h1>
          <p className="text-slate-500">Manage your products here</p>
        </div>
        <Button className="mt-4 bg-slate-600">
          <HiPlus size={20} />
          <span className="ml-2">Add Product</span>
        </Button>
      </div>
      <div className="mt-8">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Button className="bg-slate-600">
                      Edit
                    </Button>
                    <Button className="bg-red-600">
                      Sold Out
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      
    </div>
  );
}
