import Layout  from "Components/Layout";
import VideoPreview  from "components/VideoPreview/Index";

export default function VideoPreviewPage() {
  return (
    <Layout>
      <div className="bg-gray-50 h-screen flex-1 flex items-center justify-center">
          <VideoPreview/>
      </div>
    </Layout>
  );
}
