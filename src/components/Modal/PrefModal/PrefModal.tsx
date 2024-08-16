import { FC } from "react";
import { Form, Select, Input, InputNumber } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import useNewsPageCtx from "../../../hooks/useNewsPageCtx";
import DatePickerComp from "../../PrefHeader/DatePicker";
import LargeModal from "../../UI/Modals";
import classes from "./PrefModule.module.css";

const { Option } = Select;

interface PrefModalProps {
  open: boolean;
}

const PrefModal: FC<PrefModalProps> = ({ open }) => {
  const { closePrefModal: onClose } = useNewsPageCtx();
  const { categ, source, keyword, date } = useSelector(
    (state: RootState) => state.filters
  );

  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (values: any) => {
    console.log("Submitted values:", values);
    // Handle form submission
    onClose();
  };

  return (
    <LargeModal
      title="User Preferences"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
        <Form.Item label="Search In" name="searchIn">
          <Select mode="multiple" placeholder="Select fields to search in">
            <Option value="title">Title</Option>
            <Option value="description">Description</Option>
            <Option value="content">Content</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Sources" name="sources">
          <Input placeholder="Comma-separated sources" />
        </Form.Item>

        <Form.Item label="Domains" name="domains">
          <Input placeholder="Comma-separated domains" />
        </Form.Item>

        <Form.Item label="Exclude Domains" name="excludeDomains">
          <Input placeholder="Comma-separated domains" />
        </Form.Item>

        <Form.Item label="From" name="from">
          <DatePickerComp placeholder="Select start date" />
        </Form.Item>

        <Form.Item label="To" name="to">
          <DatePickerComp placeholder="Select end date" />
        </Form.Item>

        <Form.Item label="Language" name="language">
          <Select placeholder="Select language">
            <Option value="en">English</Option>
            <Option value="fr">French</Option>
            <Option value="es">Spanish</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Sort By" name="sortBy">
          <Select placeholder="Select sorting">
            <Option value="relevancy">Relevancy</Option>
            <Option value="popularity">Popularity</Option>
            <Option value="publishedAt">Published At</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Page Size" name="pageSize">
          <InputNumber min={20} max={100} placeholder="Page size (20-100)" />
        </Form.Item>

        <Form.Item label="Page" name="page">
          <InputNumber min={1} placeholder="Page number" />
        </Form.Item>
      </Form>
    </LargeModal>
  );
};

export default PrefModal;
