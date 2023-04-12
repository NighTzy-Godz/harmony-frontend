import { useState } from "react";
import "../../../assets/css/ban_user.css";
import Form from "../../../components/common/Form";
import Button from "../../../components/ui/Button/Button";
import { adminBanPatient } from "../../../services/adminDataServices";

const AdminBanUser = ({ data: user, ban }) => {
  const [dataValues] = useState({
    document_id: "",
  });
  const submitEvent = async (data) => {
    data.document_id = user._id;

    if (ban === "patient") return await adminBanPatient(data);
  };

  return (
    <Form
      className="ban_user"
      dataValues={dataValues}
      submitEvent={submitEvent}
    >
      <Button label="Ban User" />
    </Form>
  );
};

export default AdminBanUser;
