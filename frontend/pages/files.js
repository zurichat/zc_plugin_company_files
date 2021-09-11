import Layout from "Components/Layout";
import EmptyFolder from "Components/EmptyFolder";
import FolderDescription from "Components/FolderDescription"

export default function FilesPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen flex-1 flex items-center justify-center">
        <EmptyFolder />
        <FolderDescription />
      </div>
    </Layout>
  );
}
