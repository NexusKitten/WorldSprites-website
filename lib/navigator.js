(function(Scratch) {
  'use strict';

  class NavigatorInfo {
    getInfo () {
      return {
        id: 'navigatorinfo',
        name: 'Navigator Info',
        blocks: [
          {
            opcode: 'getOS',
            blockType: Scratch.BlockType.REPORTER,
            text: 'operating system'
          },
          {
            opcode: 'getBrowser',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser'
          },
          {
            opcode: 'getMemory',
            blockType: Scratch.BlockType.REPORTER,
            text: 'device memory'
          },
          {
            opcode: 'getMonitorSizeW',
            blockType: Scratch.BlockType.REPORTER,
            text: 'monitor width'
          },
          {
            opcode: 'getMonitorSizeH',
            blockType: Scratch.BlockType.REPORTER,
            text: 'monitor height'
          },
        ]
      };
    }

    getOS () {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Windows')) {
        return 'Windows';
      } else if (userAgent.includes('Android')) {
        return 'Android';
      } else if (userAgent.includes('iPhone') || userAgent.includes('iPod') || userAgent.includes('iPad')) {
        return 'iOS';
      } else if (userAgent.includes('Linux')) {
        return 'Linux';
      } else if (userAgent.includes('CrOS')) {
        return 'ChromeOS';
      } else if (userAgent.includes('Mac OS')) {
        return 'macOS';
      }
      return 'Other';
    }

    getBrowser () {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Chrome')) {
        return 'Chrome';
      } else if (userAgent.includes('Firefox')) {
        return 'Firefox';
      } else if (userAgent.includes('Safari')) {
        return 'Safari';
      }
      return 'Other';
    }
    getMemory(){
      if (navigator.deviceMemory == undefined) {
        return 'Unsupported';
    } else {
        return navigator.deviceMemory;
    }
    }
    getMonitorSizeW(){
      return window.screen.width;
    }
    getMonitorSizeH(){
      return window.screen.height;
    }
  }

  Scratch.extensions.register(new NavigatorInfo());
}(Scratch));