import { FC, ChangeEvent, useState } from "react";
export enum HairColor {
  Blonde = "Your hair is blonde, good for you",
  Brown = "Cool hair color",
  pink = "Wow tht is so cool",
}

interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
  // getName: (name: string) => string;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setCountry(event.target.value)
  }
  return (
    <div>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{age}</h3>
      <input placeholder="write down your country..." onChange={handleChange}/>
      {country}
    <br />
    {hairColor}
    </div>
  );
};
