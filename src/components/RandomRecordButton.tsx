"use client";

type RandomRecordButtonProps = {
  hrefs: string[];
};

export function RandomRecordButton({ hrefs }: RandomRecordButtonProps) {
  function openRandomRecord() {
    if (!hrefs.length) return;
    const href = hrefs[Math.floor(Math.random() * hrefs.length)];
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <button className="random-record-button" type="button" onClick={openRandomRecord}>
      Random Record
    </button>
  );
}
