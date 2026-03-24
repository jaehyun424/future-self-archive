export default function PrivatePlaceholder() {
  return (
    <div className="p-4 bg-surface-container-low rounded-2xl">
      <p className="text-on-surface-variant/50 text-sm flex items-center gap-2">
        <span>🔒</span>
        비공개 내용입니다
      </p>
    </div>
  );
}
