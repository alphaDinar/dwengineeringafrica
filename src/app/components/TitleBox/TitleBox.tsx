'use client'
import { useRouter } from "next/navigation";
import { FC } from "react";
import { MdArrowBack } from "react-icons/md";

type TitleBoxProps = {
  title: string
};

const TitleBox: FC<TitleBoxProps> = ({ title }) => {
  const router = useRouter();

  return (
    <h3 id='title'> <MdArrowBack style={{ cursor: 'pointer' }} onClick={() => router.back()} /> {title}</h3>
  );
}

export default TitleBox;