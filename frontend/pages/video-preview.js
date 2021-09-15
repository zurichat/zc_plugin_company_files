import Layout  from "Components/Layout";
import VideoPreview  from "Components/VideoPreview";

export default function VideoPreviewPage() {
  return (
    <Layout>
      <div className="bg-gray-50 h-screen flex-1 flex items-center justify-center">
          <VideoPreview/>
      </div>
    </Layout>
  );
}
