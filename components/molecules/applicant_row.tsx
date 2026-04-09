import { Icon } from '../atoms/icon';
import { Badge } from '../atoms/badge';

interface ApplicantRowProps {
  name: string;
  avatarSrc: string;
  jobApplied: string;
  appliedDate: string;
  status: 'Baru' | 'Wawancara' | 'Diterima' | 'Ditolak';
  jlptLevel: string;
}

export function ApplicantRow({ name, avatarSrc, jobApplied, appliedDate, status, jlptLevel }: ApplicantRowProps) {
  const statusColorMap = {
    'Baru': 'primary',         // Teal
    'Wawancara': 'secondary',  // Purple
    'Diterima': 'tertiary',    // Teal
    'Ditolak': 'white'         // Outline/Light
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-surface-container-lowest hover:bg-surface-bright transition-colors rounded-2xl border-b border-outline-variant/20 last:border-b-0 w-full gap-4 md:gap-0">
      <div className="flex items-center gap-4 flex-1">
        <img alt={`Avatar ${name}`} src={avatarSrc} className="w-12 h-12 rounded-full border border-outline-variant/30 object-cover" />
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-sm text-on-surface-variant">{jobApplied}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 flex-1 justify-start md:justify-center">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">JLPT</span>
          <span className="text-sm font-bold text-secondary">{jlptLevel}</span>
        </div>
        <div className="w-px h-8 bg-outline-variant/30 mx-2"></div>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Tanggal</span>
          <span className="text-sm font-medium">{appliedDate}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between md:justify-end gap-6 flex-1">
        <Badge 
          text={status} 
          colorScheme={statusColorMap[status] as any} 
        />
        <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed/30 rounded-lg transition-colors">
          <Icon name="more_vert" />
        </button>
      </div>
    </div>
  );
}
