
import ProfileSection from "@/components/layout/profile/ProfileSection";
import ProfileWishlist from "@/components/layout/profile/ProfileWishlist";
import Title from "@/components/header/title/Title";
import HeaderTitle from "@/components/utils/data/HeaderTitle";
import Profile from "@/components/utils/data/Profile";

const page = () => {
  return( 
  <div className="mx-14 flex flex-col gap-5">
    <Title data={HeaderTitle.profile}/>
    <div className="flex gap-10 justify-between">
    <ProfileSection data={Profile}/>
    <ProfileWishlist/>
    </div>
  </div>
  )
};

export default page;
