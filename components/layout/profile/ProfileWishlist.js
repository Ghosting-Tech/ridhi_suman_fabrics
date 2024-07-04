import SmProductCard from "@/components/card/SmProductCard";
import Title from "@/components/cardTitle/title/Title";

const ProfileWishlist = () => {
  // Map wishlist Items
  return (
    <>
      <div className="w-1/2">
        <Title />
        <SmProductCard />
        <SmProductCard />
        <SmProductCard />
      </div>
    </>
  );
};

export default ProfileWishlist;
