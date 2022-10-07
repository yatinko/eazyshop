import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

// SearchBar Component Definition.
const SearchBar = () => {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size={24} stroke={1.5} />}
      radius="xl"
      size="sm"
      rightSection={
        <ActionIcon size={24} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === "ltr" ? (
            <IconArrowRight size={14} stroke={1.5} />
          ) : (
            <IconArrowLeft size={14} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Search Items"
      rightSectionWidth={42}
    />
  );
};

export default SearchBar;
