import admin_img from "../../../assets/img/admin.png";
import appointment_img from "../../../assets/img/appointment.png";
import doctor_img from "../../../assets/img/doctor.png";
import patient_img from "../../../assets/img/patient.png";

const getAdminStatus = (admin) => {
  return [
    {
      id: 0,
      name: "Patients",
      img: patient_img,
      info:
        admin && Object.keys(admin).length !== 0
          ? admin.listOfPatients.length
          : 0,
    },
    {
      id: 1,
      name: "Doctors",
      img: doctor_img,
      info:
        admin && Object.keys(admin).length !== 0
          ? admin.listOfDoctors.length
          : 10,
    },
    {
      id: 2,
      name: "Appointments",
      img: appointment_img,
      info:
        admin && Object.keys(admin).length !== 0
          ? admin.listOfAppointments.length
          : 0,
    },
    {
      id: 3,
      name: "Revenue",
      img: admin_img,
      info: "Narigat Pay",
    },
  ];
};

export default getAdminStatus;
