const HomeBackground = ({ children }: any) => (
    <div className="flex flex-col items-center bg-[url('/icons/bg_objects.png')] bg-cover bg-no-repeat bg-center">
         <div className="absolute">
            <img src="/images/appvironments_header_img_homepage.png"  alt="" />
         </div>
        { children }
    </div>
)

export default HomeBackground;
