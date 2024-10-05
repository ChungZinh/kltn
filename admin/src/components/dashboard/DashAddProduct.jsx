import {
  Button,
  Label,
  Select,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import { HiSave } from "react-icons/hi";

export default function DashAddProduct() {
  const categories = [
    {
      id: 1,
      name: "Main Course",
      description: "Delicious main course",
    },
    {
      id: 2,
      name: "Starters",
      description: "Delicious starters",
    },
    {
      id: 3,
      name: "Deserts",
      description: "Delicious deserts",
    },
    {
      id: 4,
      name: "Drinks",
      description: "Delicious drinks",
    },
  ];

  return (
    <div className="h-full bg-slate-200 p-6">
      {/* ADD PRODUCT */}
      <div className="">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-3xl font-semibold ">Add Products</h1>
            <p className="text-slate-500">Add your products here</p>
          </div>
          <div className="">
            <Button className="mt-4 bg-slate-600">
              <HiSave size={20} />
              <span className="ml-2">Add Product</span>
            </Button>
          </div>
        </div>
        <div className="mt-8 bg-white p-4 rounded-md shadow-md">
          <form>
            <div className="space-y-2">
              <Label className="mt-4">Product Name</Label>
              <TextInput placeholder="Enter product name" />
            </div>

            <div className="space-y-2 flex items-center justify-center gap-4 mt-4">
              <div className="w-1/2 space-y-2">
                <Label className="mt-4">Product Category</Label>
                <Select>
                  <option>Select Category</option>
                  <option>Main Course</option>
                  <option>Starters</option>
                  <option>Deserts</option>
                  <option>Drinks</option>
                </Select>
              </div>
              <div className="w-1/2 space-y-1">
                <Label className="mt-4">Product Price</Label>
                <TextInput placeholder="Enter product price" />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label className="mt-4">Product Image</Label>
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4 space-y-2">
              <Label className="mt-4">Product Description</Label>
              <Textarea rows={8} placeholder="Enter product description" />
            </div>
          </form>
        </div>
      </div>

      {/* ADD CATEGORY */}
      <div className="">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-3xl font-semibold ">Add Category</h1>
            <p className="text-slate-500">Add your category here</p>
          </div>
          <div className="">
            <Button className="mt-4 bg-slate-600">
              <HiSave size={20} />
              <span className="ml-2">Add Category</span>
            </Button>
          </div>
        </div>
        <div className="mt-8 bg-white p-4 rounded-md shadow-md">
          <form>
            <div className="space-y-2">
              <Label className="mt-4">Category Name</Label>
              <TextInput placeholder="Enter category name" />
            </div>

            <div className="mt-4 space-y-2">
              <Label className="mt-4">Product Description</Label>
              <Textarea rows={8} placeholder="Enter product description" />
            </div>
          </form>
          <div className="mt-4">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Category name</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell>Edit</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {categories.map((category) => (
                  <Table.Row key={category.id}>
                    <Table.Cell>{category.name}</Table.Cell>
                    <Table.Cell>{category.description}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button className="bg-slate-600">Edit</Button>
                        <Button className="bg-red-600">Delete</Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
