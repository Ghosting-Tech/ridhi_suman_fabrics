import SmProductCard from "@/components/card/SmProductCard";
import CardTitle from "@/components/cardTitle/CardTitle.";
import cardTitle from "@/components/utils/data/cardTitle";

const ProfileWishlist = () => {
  // Map wishlist Items
  return(
     <div className="w-1/2">
      <CardTitle data={cardTitle.wishlist}/>
      <SmProductCard/>
     </div>
  )
};

export default ProfileWishlist;
