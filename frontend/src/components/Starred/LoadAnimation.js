import React from "react";

const LoadAnimation = () => {
  return (
    <div className="tw-text-center tw-mt-60 tw-preloader">
      <div className="tw-p-3 tw-flex tw-items-center tw-text-center tw-justify-center">
        <svg
          className="tw-animate-bounce tw-h-4 tw-w-4 tw-mr-3 tw-bg-green-600 tw-rounded-full"
          viewBox="0 0 24 24"
        />
        <svg
          className="tw-animate-bounce tw-h-4 tw-w-4 tw-mr-3 tw-bg-green-500 tw-rounded-full"
          viewBox="0 0 24 24"
        />
        <svg
          className="tw-animate-bounce tw-h-3 tw-w-3 tw-mr-3 tw-bg-green-400 tw-rounded-full"
          viewBox="0 0 24 24"
        />
        <svg
          className="tw-animate-bounce tw-h-2 tw-w-2 tw-mr-3 tw-bg-green-300 tw-rounded-full"
          viewBox="0 0 24 24"
        />
        <svg
          className="tw-animate-bounce tw-h-1 tw-w-1 tw-mr-3 tw-bg-green-200 tw-rounded-full"
          viewBox="0 0 24 24"
        />
      </div>
    </div>
  );
};

export default LoadAnimation;
