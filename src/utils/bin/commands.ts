// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `<div class="hidden xl:block">
TTTTTTTTTTTTTTTTTTTTTTT                     iiii       TTTTTTTTTTTTTTTTTTTTTTT                                                     
T:::::::::::::::::::::T                    i::::i      T:::::::::::::::::::::T                                                     
T:::::::::::::::::::::T                     iiii       T:::::::::::::::::::::T                                                     
T:::::TT:::::::TT:::::T                                T:::::TT:::::::TT:::::T                                                     
TTTTTT  T:::::T  TTTTTTrrrrr   rrrrrrrrr  iiiiiii      TTTTTT  T:::::T  TTTTTTrrrrr   rrrrrrrrr   aaaaaaaaaaaaa  nnnn  nnnnnnnn    
        T:::::T        r::::rrr:::::::::r i:::::i              T:::::T        r::::rrr:::::::::r  a::::::::::::a n:::nn::::::::nn  
        T:::::T        r:::::::::::::::::r i::::i              T:::::T        r:::::::::::::::::r aaaaaaaaa:::::an::::::::::::::nn 
        T:::::T        rr::::::rrrrr::::::ri::::i              T:::::T        rr::::::rrrrr::::::r         a::::ann:::::::::::::::n
        T:::::T         r:::::r     r:::::ri::::i              T:::::T         r:::::r     r:::::r  aaaaaaa:::::a  n:::::nnnn:::::n
        T:::::T         r:::::r     rrrrrrri::::i              T:::::T         r:::::r     rrrrrrraa::::::::::::a  n::::n    n::::n
        T:::::T         r:::::r            i::::i              T:::::T         r:::::r           a::::aaaa::::::a  n::::n    n::::n
        T:::::T         r:::::r            i::::i              T:::::T         r:::::r          a::::a    a:::::a  n::::n    n::::n
      TT:::::::TT       r:::::r           i::::::i           TT:::::::TT       r:::::r          a::::a    a:::::a  n::::n    n::::n
      T:::::::::T       r:::::r           i::::::i           T:::::::::T       r:::::r          a:::::aaaa::::::a  n::::n    n::::n
      T:::::::::T       r:::::r           i::::::i           T:::::::::T       r:::::r           a::::::::::aa:::a n::::n    n::::n
      TTTTTTTTTTT       rrrrrrr           iiiiiiii           TTTTTTTTTTT       rrrrrrr            aaaaaaaaaa  aaaa nnnnnn    nnnnnn</div><div class="hidden sm:block xl:hidden">
TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
T:::::::::::::::::::::TT:::::::::::::::::::::T
T:::::::::::::::::::::TT:::::::::::::::::::::T
T:::::TT:::::::TT:::::TT:::::TT:::::::TT:::::T
TTTTTT  T:::::T  TTTTTTTTTTTT  T:::::T  TTTTTT
        T:::::T                T:::::T        
        T:::::T                T:::::T        
        T:::::T                T:::::T        
        T:::::T                T:::::T        
        T:::::T                T:::::T        
        T:::::T                T:::::T        
        T:::::T                T:::::T        
      TT:::::::TT            TT:::::::TT      
      T:::::::::T            T:::::::::T      
      T:::::::::T            T:::::::::T      
      TTTTTTTTTTT            TTTTTTTTTTT      </div><div class="block sm:hidden">  _____ _____ 
 |_   _|_   _|
   | |   | |  
   |_|   |_|</div>
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
