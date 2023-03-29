function docShortStatus(specialty) {
  return [
    {
      id: 0,
      name: "Total Patients",
      data: "49 Patients",
    },

    {
      id: 1,
      name: "Appointments",
      data: "12 Appointments",
    },

    {
      id: 2,
      name: "Revenue",
      data: "56,000 Pesos",
    },

    {
      id: 3,
      name: "Current Specialty",
      data: specialty,
    },
  ];
}

export default docShortStatus;
