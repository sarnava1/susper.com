import { Component, OnInit } from '@angular/core';
import { url } from '../../assets/url_configuration';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  susperUrl = url.susper.site;
  fossasiaBlogUrl = url.fossasia.blog;
  fossasiaUrl = url.fossasia.site;
  loklakUrl = url.loklak.site;
  susiUrl = url.susi.site;
  eventyayUrl = url.eventyay.site;
  pslabUrl = url.pslab.site;
  fossasiaLabsUrl = url.fossasia.labs;
  fossasia_repo = url.github_repo.fossasia;
  badgeyayUrl = 'http://' + url.badgeyay.site;
  meilixUrl = 'http://' + url.meilix.site;
  phimpmeUrl = 'https://' + url.phimpme.site;
  susimagicmirrorUrl = 'https://' + url.susimagicmirror.site;
  yaydocUrl = 'http://' + url.yaydoc.site;

  constructor() { }
  ngOnInit() {
  }
}
