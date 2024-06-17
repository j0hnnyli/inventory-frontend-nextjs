import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Options = {
  value: string;
  option: string;
}

type Props = {
  fn : (selected : string) => void;
  options : Options[];
  placeholder: string;
  width?: string
}

const SelectFiliter = ({ fn, options, placeholder, width= '200px' } : Props) => {
  return (
    <Select onValueChange={fn}>
      <SelectTrigger className={`w-[${width}]`}>
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option.value}>{option.option}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectFiliter