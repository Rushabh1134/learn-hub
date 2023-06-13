
import BreadCrumb from "./BreadCrumb";
import AvatarDropDown from "./AvatarDropDown";
import { ThemeToggle } from "@/components/theme-toggle";

const HomeHeader = () => {
  return (
    <header className="flex sticky top-0 items-center justify-between px-7 pb-2">
      <BreadCrumb />
      <div className="flex items-center gap-5">
        <ThemeToggle />
        <AvatarDropDown />
      </div>
    </header>
  );
};

export default HomeHeader;
