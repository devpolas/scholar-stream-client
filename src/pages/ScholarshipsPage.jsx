import ScholarshipCard from "../components/scholarships/ScholarshipCard";

export default function ScholarshipsPage() {
  // const data = {
  //   scholarshipName: "Global Excellence Scholarship",
  //   universityName: "Harvard University",
  //   universityImage: "https://example.com/harvard.jpg",
  //   universityCountry: "USA",
  //   universityCity: "Cambridge",
  //   universityWorldRank: 1,
  //   subjectCategory: "Computer Science",
  //   scholarshipCategory: "Full Fund",
  //   degree: "Masters",
  //   tuitionFees: "0",
  //   applicationFees: "50",
  //   serviceCharge: "100",
  //   applicationDeadline: "2025-05-15",
  //   scholarshipPostDate: "2025-02-01",
  //   postedUserEmail: "admin@example.com",
  // };

  const scholarship = {
    _id: "123",
    universityImage: "https://example.com/harvard.jpg",
    universityName: "Harvard University",
    scholarshipCategory: "Full Fund",
    universityCountry: "USA",
    universityCity: "Cambridge",
    applicationFees: 50,
  };
  return (
    <div>
      Scholarships Page
      <ScholarshipCard scholarship={scholarship} />
    </div>
  );
}
