import { menuItems } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuGrid() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">

        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}

      </div>
    </section>
  );
}