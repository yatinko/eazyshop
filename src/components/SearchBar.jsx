import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

// SearchBar Component Definition.
const SearchBar = () => {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size={28} stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === "ltr" ? (
            <IconArrowRight size={18} stroke={1.5} />
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Search Items"
      rightSectionWidth={42}
    />
  );
};

export default SearchBar;
