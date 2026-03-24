export default function PrivatePlaceholder({ count }: { count?: number }) {
  return (
    <div className="p-4 bg-surface-container-low rounded-2xl">
      <p className="text-on-surface-variant/50 text-sm flex items-center gap-2">
        <span>🔒</span>
        {count && count > 1 ? `비공개 내용 ${count}개` : "비공개 내용입니다"}
      </p>
    </div>
  );
}
