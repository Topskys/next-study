"use client";
import { Posts } from "@/db";
import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Space,
  Table,
  TablePaginationConfig,
} from "antd";
import { useEffect, useState } from "react";

const todoStyle = {
  padding: "20px",
  margin: "0 auto",
  maxWidth: "80%",
  border: "1px dashed #eee",
  borderRadius: "4px",
};

const { Search } = Input;

interface TableParams {
  pagination?: TablePaginationConfig;
  query?: string;
}

export default function Page() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<{ list: Posts[]; total?: number }>({
    list: [],
    total: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      showSizeChanger: true,
    },
    query: "",
  });
  const [fields, setFields] = useState<any>();

  useEffect(() => {
    // 发起请求
    async function fetchData() {
      setIsLoading(true);
      const { pagination, query } = tableParams;
      const { current, pageSize } = pagination!;
      const res = await fetch(
        `/api/articles?page=${current}&pageSize=${pageSize}&query=${query}`
      );
      const data = await res.json();
      if (!data) {
        return {
          notFound: true,
        };
      }
      setData({
        list: data.data.list,
        total: data.data.total,
      });
      setIsLoading(false);
    }
    fetchData();
    return () => {
      console.log("unmount");
    };
  }, [tableParams]);

  const onTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      ...tableParams,
      pagination,
    });
  };

  const onSearch = (value: string) =>
    setTableParams({ ...tableParams, query: value });

  const onRowEdit = (record: Posts) => {
    setIsModalOpen(true);
    form.setFieldsValue({ ...record });
    setFields({ ...record });
  };

  const onRowDelete = async (record: Posts) => {
    const res = await fetch("/api/articles/" + record.id, { method: "DELETE" });
    if (res.ok) {
      setTableParams({
        ...tableParams,
        pagination: {
          current: 1,
          pageSize: 10,
        },
        query: "",
      });
    }
  };

  const onFinish = async () => {
    const fieldValues = await form.validateFields();
    const id = fields?.id;
    await fetch(`/api/articles${id ? "/" + id : ""}`, {
      method: id ? "PATCH" : "POST",
      body: JSON.stringify(fieldValues),
    });
    setTableParams({
      ...tableParams,
      pagination: {
        current: 1,
        pageSize: 10,
      },
      query: "",
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setFields(undefined);
  };

  const handleOk = async () => {
    await onFinish();
    handleCancel();
  };

  const columns = [
    {
      title: "Order",
      render: (_: string, record: Posts, index: number) => index + 1,
    },
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "content",
    },
    {
      title: "Actions",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, record: Posts) => {
        return (
          <Space>
            <a onClick={() => onRowEdit(record)}>Edit</a>
            {data.list.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => onRowDelete(record)}
              >
                <a>Delete</a>
              </Popconfirm>
            ) : null}
          </Space>
        );
      },
    },
  ];

  return (
    <div className="todo-table" style={todoStyle}>
      {/* 展示列表 */}
      <div>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onSearch={onSearch}
          style={{ width: "30%", marginRight: "10px" }}
        />
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          新增
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data.list}
        onChange={onTableChange}
        loading={isLoading}
        pagination={{ ...tableParams.pagination, total: data.total }}
        style={{ marginTop: "10px" }}
        rowKey={"id"}
        bordered
      />
      {/* 编辑弹窗 */}
      <Modal
        title={fields?.id ? "编辑文章" : "新增文章"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} autoComplete="off">
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input placeholder="input title" />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: "Please input content!" }]}
          >
            <Input.TextArea placeholder="input content" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
