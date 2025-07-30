export default function Home() {
    const video_1 = "https://cdn.klingai.com/bs2/upload-kling-api/3864707750/image2video/CjR6dWhmPKIAAAAAAzO87Q-0_raw_video_2.mp4";
    const video_2 = "https://cdn.klingai.com/bs2/upload-kling-api/3864707750/image2video/ChDGTWh2CYoAAAAAAXofBg-0_raw_video_2.mp4";

    return (
        <div
            className="min-h-screen bg-gradient-to-br flex items-center flex-col gap-6 py-12"
            style={{ backgroundColor: "#F5F3F8" }}
        >
            <h1 className="text-2xl font-semibold mb-4">Generated Videos</h1>

            <video width="640" height="360" controls>
                <source src={video_1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <video width="640" height="360" controls>
                <source src={video_2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
