import { Container } from "@/shared/layout/Container";
import DateIcon from "@/shared/icons/date.svg";
import CustomerIcon from "@/shared/icons/customer.svg";
import JobsIcon from "@/shared/icons/jobs.svg";
import WarrantyIcon from "@/shared/icons/warranty.svg";

const STATS = [
  {
    value: "10+",
    label: "Years Active",
    icon: <DateIcon />,
  },
  {
    value: "6000+",
    label: "Satisfied Customers",
    icon: <CustomerIcon />,
  },
  {
    value: "5 000+",
    label: "Jobs Done",
    icon: <JobsIcon />,
  },
  {
    value: "90",
    label: "Day Warranty",
    icon: <WarrantyIcon />,
  },
];

export function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="bg-brand mb-50 py-6  md:py-4"
    >
      <Container>
        <ul className="flex flex-col lg:flex-row gap-12">
          {STATS.map(({ value, label, icon }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-0.5  text-white lg:flex-1 "
            >
              <div className="flex items-center gap-2 ">
                <span>{icon}</span>
                <span className="text-[2rem] lg:text-[42px] lg:leading-16.5   font-bold text-white leading-10 font-work-sans">
                  {value}
                </span>
              </div>

              <span className="text-[18px] leading-7  font-manrope font-normal text-white">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
