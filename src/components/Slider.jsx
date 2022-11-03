import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import Card from "./Card";

// Creating Slider Card Component Data(path of Images)
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1658424466606-35430630706e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    title: "It’s more than a phone – it’s a way of life",
    category: "Mobiles"
  },
  {
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "A laptop you can count on!",
    category: "Laptops"
  },
  {
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Click all you want.",
    category: "Cameras"
  },
  {
    image:
      "https://images.unsplash.com/photo-1585595666499-400018927746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Be smart with a smartwatch. ",
    category: "Wearables"
  },
  {
    image:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: " Plug it, listen to it, feel it",
    category: "Audio Gear"
  },
  {
    image:
      "https://images.unsplash.com/photo-1652819804299-eea887780ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80",
    title: "Accessories that matters",
    category: "Accessories"
  }
];

// Defining Slider Component
const Slider = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  // Mapping Card data to the Slider Cards
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
};

export default Slider;
