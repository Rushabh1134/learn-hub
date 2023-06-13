import { BookOpenCheck } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <BookOpenCheck className="h-10 w-10" />
  );
};

export default Logo;
