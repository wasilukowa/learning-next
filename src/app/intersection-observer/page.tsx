import { IntersectionObserverUsage } from '@/components/8_useIntersectionObserver-hard/components';

const data = {
  options: {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  paragraphs: [
    {
      id: 'par_1',
      data: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque feugiat purus, vitae consequat justo viverra nec. Phasellus rutrum a nisl sit amet tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed convallis mauris sit amet elit sagittis, sed dictum nibh eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus scelerisque turpis turpis, non fermentum odio mattis et. Phasellus vulputate dictum neque, eu convallis sapien. Proin lobortis lectus magna, in aliquam lectus pharetra vitae. Integer tincidunt, elit et vestibulum condimentum, nunc enim porttitor dolor, sed feugiat arcu sapien at ligula. Cras egestas pellentesque mi, et vestibulum orci facilisis aliquet.',
        'Integer placerat dolor fringilla feugiat lacinia. Vivamus mauris ipsum, vehicula in turpis volutpat, accumsan imperdiet justo. Donec molestie finibus ligula. Vestibulum a dui semper, feugiat arcu vitae, imperdiet eros. Mauris vitae quam vulputate, pellentesque augue vel, malesuada libero. Proin volutpat ex tortor, eu accumsan magna lacinia vel. Quisque commodo, arcu id lobortis tincidunt, urna felis tincidunt orci, sit amet laoreet neque ante non nunc. Nullam ut ultricies felis.',
        'Quisque id cursus risus, sagittis sodales ante. Vestibulum convallis placerat eleifend. Sed ac tellus augue. Cras ut mauris nulla. Integer eget rutrum lorem, in egestas tellus. Nulla egestas, urna non elementum ornare, urna neque rutrum erat, quis facilisis elit est ac lacus. Maecenas ac enim risus. Cras vel viverra sapien. Aenean felis arcu, fermentum nec neque et, lobortis vehicula mauris. Nulla vel quam odio.',
      ],
    },
    {
      id: 'par_2',
      data: [
        'Integer fringilla congue mollis. Suspendisse ac mauris hendrerit, tristique velit a, dignissim ligula. Donec hendrerit gravida ligula, sodales maximus sapien sollicitudin ac. Quisque faucibus semper risus. Vestibulum ullamcorper arcu sit amet augue interdum, eu aliquet neque tincidunt. Vestibulum pretium lacus odio, sit amet semper quam vestibulum ut. Phasellus molestie in ipsum non luctus. Donec ornare eleifend tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique augue nec libero auctor condimentum. Proin enim tellus, tempor vel lorem id, ultrices sodales sapien.',
        'Curabitur faucibus tellus ac hendrerit suscipit. Praesent et ex fringilla urna scelerisque iaculis eget at odio. Curabitur egestas efficitur justo vitae vehicula. Sed ultricies, justo non convallis gravida, sapien augue laoreet ante, sit amet placerat odio metus vel leo. Nulla porta dictum pretium. Donec ac mollis felis. Vivamus eget mattis mauris. Aliquam faucibus et ligula sit amet scelerisque. Integer eleifend hendrerit dui ac accumsan. Quisque tempus nisl ac placerat pretium. Morbi quis vehicula neque, sit amet varius turpis.',
        'Maecenas posuere leo in nisi iaculis congue. Pellentesque suscipit sit amet risus at pulvinar. Donec vitae lorem at nisi facilisis luctus eget ut orci. Duis id scelerisque erat. Nunc at euismod mauris. Fusce placerat quam ac metus fermentum lacinia. Quisque condimentum ut elit et maximus. Etiam vulputate, magna ut congue lobortis, elit nisi consequat risus, vestibulum semper massa tellus malesuada enim. Suspendisse tempor dolor non ultricies vehicula. Sed diam diam, aliquam non elementum sit amet, molestie sed lorem. Etiam nec erat efficitur, imperdiet ante eget, facilisis justo. Mauris augue metus, blandit quis eros sed, aliquam tristique sem. Aliquam mollis, massa ac rutrum varius, dolor nisl efficitur mi, et volutpat nunc ipsum a velit. Donec vel sagittis magna.',
        'Curabitur nunc mi, imperdiet non erat sed, sodales rutrum sem. Aliquam feugiat turpis leo, quis posuere lacus bibendum in. Donec efficitur urna turpis, id malesuada ipsum blandit quis. Morbi commodo pretium pellentesque. In ac orci nisi. Nullam commodo mollis consectetur. Ut placerat condimentum dignissim.',
      ],
    },
    {
      id: 'par_3',
      data: [
        'Integer fringilla congue mollis. Suspendisse ac mauris hendrerit, tristique velit a, dignissim ligula. Donec hendrerit gravida ligula, sodales maximus sapien sollicitudin ac. Quisque faucibus semper risus. Vestibulum ullamcorper arcu sit amet augue interdum, eu aliquet neque tincidunt. Vestibulum pretium lacus odio, sit amet semper quam vestibulum ut. Phasellus molestie in ipsum non luctus. Donec ornare eleifend tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique augue nec libero auctor condimentum. Proin enim tellus, tempor vel lorem id, ultrices sodales sapien.',
        'Curabitur faucibus tellus ac hendrerit suscipit. Praesent et ex fringilla urna scelerisque iaculis eget at odio. Curabitur egestas efficitur justo vitae vehicula. Sed ultricies, justo non convallis gravida, sapien augue laoreet ante, sit amet placerat odio metus vel leo. Nulla porta dictum pretium. Donec ac mollis felis. Vivamus eget mattis mauris. Aliquam faucibus et ligula sit amet scelerisque. Integer eleifend hendrerit dui ac accumsan. Quisque tempus nisl ac placerat pretium. Morbi quis vehicula neque, sit amet varius turpis.',
        'Maecenas posuere leo in nisi iaculis congue. Pellentesque suscipit sit amet risus at pulvinar. Donec vitae lorem at nisi facilisis luctus eget ut orci. Duis id scelerisque erat. Nunc at euismod mauris. Fusce placerat quam ac metus fermentum lacinia. Quisque condimentum ut elit et maximus. Etiam vulputate, magna ut congue lobortis, elit nisi consequat risus, vestibulum semper massa tellus malesuada enim. Suspendisse tempor dolor non ultricies vehicula. Sed diam diam, aliquam non elementum sit amet, molestie sed lorem. Etiam nec erat efficitur, imperdiet ante eget, facilisis justo. Mauris augue metus, blandit quis eros sed, aliquam tristique sem. Aliquam mollis, massa ac rutrum varius, dolor nisl efficitur mi, et volutpat nunc ipsum a velit. Donec vel sagittis magna.',
        'Curabitur vitae massa non tortor feugiat commodo. Sed ac lectus id tortor vestibulum feugiat ac a massa. Sed et erat porttitor, pulvinar neque eu, pulvinar purus. Donec ornare diam odio, quis congue enim egestas vitae. Pellentesque gravida sed ipsum non finibus. Nullam non laoreet diam, vel eleifend risus. Pellentesque efficitur quam ac varius semper. Cras eget felis nec nibh vestibulum pretium quis id sapien. Mauris nec viverra purus. Nulla a finibus enim. Sed erat sapien, feugiat in dignissim non, laoreet ut est. Etiam semper sem ac eros scelerisque, non sollicitudin tortor dapibus. Cras sed neque sit amet lacus vulputate tincidunt. Nam mi urna, accumsan eget velit eget, vulputate suscipit nunc. Nulla ut nibh venenatis eros hendrerit ullamcorper eget ut urna. Nullam sagittis vehicula erat.',
        'Curabitur nunc mi, imperdiet non erat sed, sodales rutrum sem. Aliquam feugiat turpis leo, quis posuere lacus bibendum in. Donec efficitur urna turpis, id malesuada ipsum blandit quis. Morbi commodo pretium pellentesque. In ac orci nisi. Nullam commodo mollis consectetur. Ut placerat condimentum dignissim.',
        'Integer placerat dolor fringilla feugiat lacinia. Vivamus mauris ipsum, vehicula in turpis volutpat, accumsan imperdiet justo. Donec molestie finibus ligula. Vestibulum a dui semper, feugiat arcu vitae, imperdiet eros. Mauris vitae quam vulputate, pellentesque augue vel, malesuada libero. Proin volutpat ex tortor, eu accumsan magna lacinia vel. Quisque commodo, arcu id lobortis tincidunt, urna felis tincidunt orci, sit amet laoreet neque ante non nunc. Nullam ut ultricies felis.',
        'Quisque id cursus risus, sagittis sodales ante. Vestibulum convallis placerat eleifend. Sed ac tellus augue. Cras ut mauris nulla. Integer eget rutrum lorem, in egestas tellus. Nulla egestas, urna non elementum ornare, urna neque rutrum erat, quis facilisis elit est ac lacus. Maecenas ac enim risus. Cras vel viverra sapien. Aenean felis arcu, fermentum nec neque et, lobortis vehicula mauris. Nulla vel quam odio.',
      ],
    },
  ],
};

const IntersectionObserverPage = async () => {
  return (
    <IntersectionObserverUsage
      options={data.options}
      paragraphs={data.paragraphs}
    />
  );
};

export default IntersectionObserverPage;
