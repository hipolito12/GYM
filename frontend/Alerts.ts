import Swal from 'sweetalert2';

export function Alerts(type: string, title: string, text: string) {
  {
    switch (type.toLowerCase()) {
      case 'success':
        Swal.fire({
          icon: 'success',
          title: title,
          toast: true,
          text: text,
        });
        break;
      case 'error':
        Swal.fire({
          icon: 'error',
          title: title,
          toast: true,
          text: text,
        });
        break;
        case 'warning':
        Swal.fire({
          icon: 'warning',
          title: title,
          toast: true,

          text: text,
        });
    }
  }
}

