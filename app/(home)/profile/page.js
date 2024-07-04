
import ProfileSection from "@/components/layout/profile/ProfileSection";
import ProfileWishlist from "@/components/layout/profile/ProfileWishlist";
import CardTitle from "@/components/cardTitle/CardTitle.";
import profile from "@/components/utils/data/profile";
import cardTitle from "@/components/utils/data/cardTitle";
const page = () => {
  return( 
  <div className="mx-14 flex flex-col gap-5">
    <CardTitle data={cardTitle.profile}/>
    <div className="flex gap-10 justify-between">
    <ProfileSection data={profile}/>
    <ProfileWishlist/>
    </div>
  </div>
  )
};

export default page;
