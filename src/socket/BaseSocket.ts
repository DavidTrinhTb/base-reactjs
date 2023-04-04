import { io } from 'socket.io-client';

export class BaseSocket {
  private static instance: BaseSocket;
  private socket: any;
  private currentPair: any = {
    pair_id: 1,
  };

  public static getInstance(): BaseSocket {
    if (!BaseSocket.instance) {
      BaseSocket.instance = new BaseSocket();
    }

    return BaseSocket.instance;
  }

  public connect({ nameSpace, path }: { nameSpace?: string; path?: string }): void {
    const publicBaseSocketURL = nameSpace
      ? `${process.env.REACT_APP_BASE_SOCKET}${nameSpace}`
      : process.env.REACT_APP_BASE_SOCKET;

    this.socket = io(publicBaseSocketURL as string, {
      path: `${path || process.env.REACT_APP_BASE_PATH_SOCKET_IO}`,
    });

    this.socket.on('connect', () => {
      console.log('connect');
    });

    this.socket.on('disconnect', (reason: any) => {
      console.log('disconnect', reason);
    });
  }

  public reconnect(): void {
    if (this.socket) {
      console.log('disconnect socket');
      this.socket.disconnect();
    }
    this.connect({});
    if (this.currentPair) {
    }
  }
}
