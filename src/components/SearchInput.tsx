import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

interface Props {
  setSearchText: (searchText: string) => void;
}

export default function SearchInput({ setSearchText }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement color="gray.500" children={<BiSearch />} />
        <Input
          ref={ref}
          fontSize="14px"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
}
