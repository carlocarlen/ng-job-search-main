import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

  // describe('addFavorite', () => {
  //   it('should update favorites', () => {
  //     expect(service.favorites().length).toBe(0);

  //     service.addFavorite(jobOne);
  //     expect(service.favorites().length).toBe(1);
  //     expect(service.favorites()).toContain(jobOne);

  //     service.addFavorite(jobTwo);
  //     expect(service.favorites().length).toBe(2);
  //     expect(service.favorites()).toContain(jobOne);
  //     expect(service.favorites()).toContain(jobTwo);
  //   })
  
  //   it('should not add values twice', () => {
  //     service.addFavorite(jobOne);
  //     service.addFavorite(jobOne);
  //     expect(service.favorites().length).toBe(1);
  //   })  

  //   // Probably just check that a persist storage is called, like we would do with http request
  //   it('should persist new favorite')
  // });

/*   it('addFavorite should make favorites to emit a new signal', (done) => {
    let firstCall = true;
    effect(() => {
      if (firstCall && service.favorites().length == 1) {
        firstCall = false;
      } else if (service.favorites().length == 2) {
        done();
      } else {
        done.fail();
      }
    });

    service.addFavorite(jobOne);
    service.addFavorite(jobTwo);

  }) */

//   describe('removeFavorite', () => {
//     it('should update favorites', () => {
//       expect(service.favorites().length).toBe(0);

//       service.addFavorite(jobOne);
//       service.addFavorite(jobTwo);
//       expect(service.favorites().length).toBe(2);

//       service.removeFavorite(jobOne);
//       expect(service.favorites().length).toBe(1);
//       expect(service.favorites()).toContain(jobTwo);
//     });

//     it('should not fail if job to remove was not favorite', () => {
//       service.addFavorite(jobOne);
//       service.removeFavorite(jobTwo);
//       expect(service.favorites().length).toBe(1);
//       expect(service.favorites()).toContain(jobOne);
//     })
//   });
// });
