import MenuHero from "@/components/menu/MenuHero";
import MenuFilter from "@/components/menu/MenuFilter";
import MenuGrid from "@/components/menu/MenuGrid";

export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <MenuFilter />
      <MenuGrid />
    </main>
  );
}