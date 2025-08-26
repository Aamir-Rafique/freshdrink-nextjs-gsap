# FreshDrink 


- radial gradient: 
```
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
<div className="w-full h-[400px] rounded-full bg-white/40 blur-[80px]" /></div>
```

### prevent unwanted scrolling or dragging, especially on mobile
- overflow-x-hidden


### packages
- ~~react-responsive~~ - **Removed**: Replaced with native window.innerWidth for better SSR compatibility

### lEarning
- inset-0 
- wherever using mask-image effect, set pin to ture in scrolltrigger

- never user height: 100% for body/html
- do not ask ai to write code directly for a feature, first ask to make a plan and then try to follow that step by step plan to implement it by yourself!!