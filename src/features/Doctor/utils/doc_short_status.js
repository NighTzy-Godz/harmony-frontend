function docShortStatus(specialty) {
  return [
    {
      id: 0,
      name: "Total Patients",
      info: "49 Patients",
    },

    {
      id: 1,
      name: "Appointments",
      info: "12 Appointments",
    },

    {
      id: 2,
      name: "Revenue",
      info: "56,000 Pesos",
    },

    {
      id: 3,
      name: "Current Specialty",
      info: specialty,
    },
  ];
}

export default docShortStatus;
