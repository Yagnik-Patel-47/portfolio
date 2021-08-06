import { FC, ReactChild } from "react";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
  title: string;
  link: string;
  children?: ReactChild;
}

const AppLink: FC<Props> = ({ title, link, children }: Props) => {
  return (
    <a href={link} target="_blank" className="flex items-center space-x-2">
      {children}
      <p className="font-semibold">{title}</p>
      <BiLinkExternal size="1.2rem" title="Link" />
    </a>
  );
};

export default AppLink;
