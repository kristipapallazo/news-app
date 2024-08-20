import { FC } from "react";
import { Form, Select, Input, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import useNewsPageCtx from "../../../hooks/useNewsPageCtx";
import DatePickerComp from "../../PrefHeader/DatePicker";
import LargeModal from "../../UI/Modals";
import { S1_PARAMS } from "../../../globals";
import dayjs from "dayjs";
import { setEverything } from "../../../store/Slices/FiltersSlice";
import { stringToArray } from "../../../utils";
import SourceSelect from "../../PrefHeader/SourceSelect";
import LangSelect from "../../PrefHeader/LangSelect";
// import classes from "./PrefModule.module.css";

interface PrefModalProps {
  open: boolean;
}

const PrefModal: FC<PrefModalProps> = ({ open }) => {
  const { closePrefModal: onClose } = useNewsPageCtx();
  const dispatch = useDispatch<AppDispatch>();
  const everything = useSelector(
    (state: RootState) => state.filters.everything
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
    const { searchIn, from, to } = values;
    if (searchIn) {
      values.searchIn = values.searchIn.join(",");
    }
    if (from) {
      values.from = dayjs(values.from).toISOString();
    }
    if (to) {
      values.to = dayjs(values.to).toISOString();
    }
    dispatch(setEverything(values));

    onClose();
  };

  const searchInOptions = S1_PARAMS.searchIn.map((i) => ({
    value: i,
    label: i,
  }));

  const sortByOptions = S1_PARAMS.sortBy.map((i) => ({
    value: i,
    label: i,
  }));
  const transformInitialValues = (values: Partial<EverythingParams>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newValues: any = { ...values };
    const { searchIn, from, to } = values;
    if (searchIn && searchIn.includes(",")) {
      newValues.searchIn = stringToArray(searchIn);
    }
    if (from) {
      newValues.from = dayjs(values.from);
    }
    if (to) {
      newValues.to = dayjs(values.to);
    }

    return newValues;
  };
  const properInitialValues = transformInitialValues(everything);

  return (
    <LargeModal
      title="User Preferences"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={properInitialValues}
      >
        <Form.Item label="Search query" name="q" required>
          <Input placeholder="Seach query" />
        </Form.Item>
        <Form.Item label="Search In" name="searchIn">
          <Select
            options={searchInOptions}
            mode="multiple"
            placeholder="Select fields to search in"
          />
        </Form.Item>

        <Form.Item label="Sources" name="sources">
          <SourceSelect />
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
          <DatePickerComp placeholder="Select end date" type="to" />
        </Form.Item>

        <Form.Item label="Language" name="language">
          <LangSelect />
        </Form.Item>

        <Form.Item label="Sort By" name="sortBy">
          <Select options={sortByOptions} placeholder="Select sorting" />
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
