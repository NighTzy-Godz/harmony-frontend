export default function filterDoc(
  data,

  currGender,
  currSpecialty
) {
  let doctors = data;
  console.log(currSpecialty);
  console.log(currGender);
  if (
    currSpecialty &&
    currSpecialty !== "All Specialties" &&
    currGender &&
    currGender !== "All Gender"
  ) {
    return (doctors = data.filter((item) => {
      return item.specialty === currSpecialty && item.gender === currGender;
    }));
  } else if (currSpecialty && currSpecialty !== "All Specialties") {
    return (doctors = data.filter((item) => {
      return item.specialty === currSpecialty;
    }));
  } else if (currGender && currGender !== "All Gender") {
    return (doctors = data.filter((item) => {
      return item.gender === currGender;
    }));
  } else {
    return doctors;
  }
}
