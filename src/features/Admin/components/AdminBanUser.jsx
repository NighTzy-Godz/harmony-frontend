import { useState } from "react";
import "../../../assets/css/ban_user.css";
import Form from "../../../components/common/Form";
import Button from "../../../components/ui/Button/Button";
import { adminBanUser } from "../../../services/adminDataServices";

const AdminBanUser = ({ data: user }) => {
  const [dataValues] = useState({
    user_id: "",
  });
  const submitEvent = async (data) => {
    data.user_id = user._id;

    await adminBanUser(data);
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
