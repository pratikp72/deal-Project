class LoaderService {
    private isLoader: boolean = false;
    private subscribers: Array<(isLoader: boolean) => void> = [];

    // Subscribe to loader changes
    subscribe(callback: (isLoader: boolean) => void): void {
        this.subscribers.push(callback);
    }

    // Unsubscribe from loader changes
    unsubscribe(callback: (isLoader: boolean) => void): void {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }

    // Set the loader flag and notify subscribers
    setLoaderState(state: boolean): void {
        this.isLoader = state;
        this.notifySubscribers();
    }

    // Get the current loader state
    getLoaderState(): boolean {
        return this.isLoader;
    }

    // Notify all subscribers of the current loader state
    private notifySubscribers(): void {
        this.subscribers.forEach(callback => callback(this.isLoader));
    }
}

// Usage example:
export const loaderService = new LoaderService();
// loaderService.subscribe((state) => console.log('Loader state:', state));
// loaderService.setLoaderState(true); // Logs: Loader state: true
// loaderService.setLoaderState(false); // Logs: Loader state: false