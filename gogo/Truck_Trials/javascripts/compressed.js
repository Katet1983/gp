var lastLevelPlayed = 0;
var CompString = ['TWljcm9zb2Z0LlhNTEhUVFA=', 'c3RhcnRfcG9zOiA=', 'ZGF0YXMvbG9jYWxpc2F0aW9uLw==', 'TmF2aWdhdG9yIExhbmd1YWdlOiA=', 'bG9jYWxlPQ==', 'TG9jYWxQb3M6IA==', 'TmF2aWdhdG9yIEZvcmNlZCBMYW5ndWFnZTogJw==', 'dW5kZWZpbmVk', 'VW5tYXRjaGVkIHRyYWlsIHN1cnJvZ2F0ZSBhdCA=', 'VW5tYXRjaGVkIGxlYWQgc3Vycm9nYXRlIGF0IA==', 'S2V2aW4gdmFuIFpvbm5ldmVsZA==', 'NmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjk=', 'PiBzZWdtZW50czog', 'UG9seUVuZA==', 'c2VnbWVudHMgbG9hZGVk', 'ZGF0YXMvbGV2ZWxzLw==', 'LmM0ZC50eHQ=', 'TmVhcmVzdFBvaW50WA==', 'Q2hlY2tJbnRlcnNlY3RfQ2lyY2xlU2VnbWVudHM=', 'ZGlzdGFuY2U6IA==', 'Q2hlY2tJbnRlcnNlY3RfTGluZVNlZ21lbnRz', 'Q2hlY2tJbnRlcnNlY3RfTGluZVNlZ21lbnRzIENvbERpckNvdW50', 'LCBDb2xEaXJY', 'LENvbERpclkg', 'Q2hlY2tJbnRlcnNlY3RfTGluZVNlZ21lbnRzSGVpZ2h0cyA=', 'Q2hlY2tJbnRlcnNlY3RfTGluZVNlZ21lbnRzSGVpZ2h0cyBkZW5vbSBPSw==', 'Q2hlY2tJbnRlcnNlY3RfTGluZVNlZ21lbnRzSGVpZ2h0cyB1YSA8IDAgfHwgdWEgPiAxIHx8IHViIDwgMCB8fCB1YiA+IDEgT0s=', 'Q2hlY2tJbnRlcnNlY3RfTGluZVNlZ21lbnRzSGVpZ2h0cyBDb2xEaXJDb3VudA==', 'Q29saXpfQ2lyY2xlVG9TdGF0aWM=', 'QXNoIHRvIG11Y2g=', 'U3RhdGljIENvdW50IGluIEhhc2ggdnMgRXZpbCA=', 'dG91Y2hzdGFydA==', 'dG91Y2htb3Zl', 'dG91Y2hlbmQ=', 'dG91Y2hjYW5jZWw=', 'dG91Y2hsZWF2ZQ==', 'a2V5ZG93bg==', 'PiBlLmtleUNvZGU+IA==', 'a2V5cHJlc3M=', 'PiBrZXlwcmVzcz4g', 'bnVtYmVy', 'c3RhbmRhcmRzIGNvbXBsaWFudCBtb2Rl', 'ZnVuY3Rpb24=', 'TW9uZXRpc2F0aW9uX19TaG93QWRfUmVxdWVzdA==', 'TW9uZXRpc2F0aW9uX19Nb3JlR2FtZXNfTGlua0NsaWNrZWQ=', 'Y2hyb21l', 'c2FmYXJp', 'YW5kcm9pZA==', 'aXBob25l', 'a2Zzb3dp', 'dGFibGV0', 'bW9iaWxl', 'YmxhY2tiZXJyeQ==', 'b3BlcmEgbWluaQ==', 'd2luZG93cyBtb2JpbGU=', 'd2luZG93cyBwaG9uZQ==', 'aWVtb2JpbGU=', 'VXNlcklE', 'VXNlcktleQ==', 'VXNlckF2YXRhcg==', 'VXNlck5hbWU=', 'U2NvcmVzVGFibGUgW1BsYXllclJhbmtdOiA=', 'U2NvcmVzVGFibGUgWw==', 'Z2V0X3Njb3Jlcy5waHA/Y2F0PQ==', 'Jm1heHNjb3JlPQ==', 'U3VibWl0X1Njb3JlIA==', 'U0NPUkVfU3VibWl0IEVSUk9SOiA=', 'U0NPUkVfU3VibWl0OiA=', 'dXBkYXRlX3Njb3Jlcy5waHA/aWQ9', 'Jm5hbWU9', 'JmF2YXRhcj0=', 'JmVtYWlsPQ==', 'JnNjb3JlPQ==', 'JnNjb3Jla2V5PQ==', 'U3VibWl0X1Njb3JlOg==', 'b3ZlcmxheQ==', 'RGlhbEJveA==', 'YWxwaGEob3BhY2l0eT0=', 'T3ZlcmxheUZyYW1l', 'SW5pdCBHYW1lUGFkcyA=', 'Z2FtZXBhZGNvbm5lY3RlZA==', 'Z2FtZXBhZGRpc2Nvbm5lY3RlZA==', 'Rm91bmQg', 'IEdhbWVQYWRz', 'Z2FtZXBhZHMg', 'b2JqZWN0', 'YnV0dG9uUHJlc3NlZCA=', 'KioqQ0FOVCBTaGFkZXJzX1VzZVs=', 'YVZlcnRleFBvc2l0aW9u', 'YVZlcnRleE5vcm1hbA==', 'YVRleHR1cmVDb29yZA==', 'dVBNYXRyaXg=', 'dU1WTWF0cml4', 'dU5NYXRyaXg=', 'Q2FtTWF0cml4', 'VGV4dHVyZTA=', 'VGV4dHVyZTE=', 'VGV4dHVyZTI=', 'Qm9uZXNQb3NpdGlvbg==', 'Qm9uZXNMb29rQXQ=', 'dUNvbG9ycw==', 'bGlnaHREaXJlY3Rpb24=', 'dVNoYWRvd01hdHJpeA==', 'UGFydGljbGVEYXRh', 'XG5cblxuXG5DcmVhdGVfU2hhZGVyUHJvZ1s=', 'RXJyb3IgQ29tcGlsZSBWZXJ0ZXggU2hhZGVyIFs=', 'RXJyb3IgQ29tcGlsZSBGcmFnbWVudCBTaGFkZXIgWw==', 'Q291bGQgbm90IGluaXRpYWxpc2Ugc2hhZGVycw==', 'ZGF0YXMvc2hhZGVycy8=', 'c2ltcGxl', 'c2ltcGxlX2NvbG9y', 'b25seV9jb2xvcg==', 'c2hhZG93', 'c2ltcGxlX3NoYWRvdw==', 'c2tpbm5lZF9jb2xvcg==', 'c2tpbm5lZF9vdXRsaW5l', 'c2tpbm5lZF9saWdodA==', 'd2F0ZXJfZm9hbQ==', 'dGV4dHVyZV9saWdodA==', 'Y2xpcGVk', 'Y2xpcGVkX3RleHR1cmU=', 'd2F0ZXJfcmVmcmFjdGlvbg==', 'c2tpbm5lZF9jbGlwZWQ=', 'c2tpbm5lZF9saWdodF9zaGFkb3c=', 'dGV4dHVyZV9saWdodF9zaGFkb3c=', 'Y2xpcGVkX3RleHR1cmVfc2hhZG93', 'cGFydGljbGU=', 'SW5pdFNwcml0ZXNCdWZmZXJz', 'aGFuZGxlTG9hZGVkVGV4dHVyZSA=', 'Tm8gUG93ZXIgT2YgVHdvWw==', 'TmV3IFNpemUg', 'Y2FudmFz', 'ZGF0YXMv', 'Rm91bmQgRHVwbGlhY3RlIFRleHR1cmVb', 'SW5pdE9uZVRleHR1cmVb', 'QW5vbnltb3Vz', 'SW52YWxpZCBwb3BNYXRyaXgh', 'U3ByaXRlX0RyYXdCb3gg', 'U3ByaXRlQnV0dG9uX0RyYXcg', 'ISFTcHJpdGVfRHJhdyA=', 'IUFkZGluZyBXYWxsIA==', 'TG9hZE9iamVjdFRleHR1cmU6IA==', 'ZXhwb3J0Lw==', 'dGV4dHVyZXMv', 'T2JqZWN0X0RyYXcgWw==', 'XTogU3ViPQ==', 'RHJhd0VsZW1lbnRzIFs=', 'XSBJbmRleE51bUl0ZW09', 'R290IE9iamVjdCBvdmVyd3JpdGVu', 'T2JqZWN0X0xvYWRb', 'cmVhZHlTdGF0ZVs=', 'TWFya2Vy', 'ZXhjbHVkZQ==', 'RWxlbWVudF8=', 'RWxlbWVudF9PSUw=', 'RWxlbWVudF9DT0lO', 'RWxlbWVudF9CT09TVA==', 'RWxlbWVudF9JQ0U=', 'RWxlbWVudF9MYW1w', 'Z290IEVsZW1lbnQ=', 'QUlfUGF0aF9B', 'QWlfUGF0aF9BX0NvdW50IA==', 'QWlfUGF0aF9BIHgg', 'QWlfUGF0aF9BIHog', 'Z290IEFJIFBhdGg=', 'RmluaXNoaW5nIFN1Yk9iaiA=', 'VHJpYW5nbGVzIA==', 'VmVydGV4cyA=', 'bm9fc2hhZG93', 'ISEhISEhISEgV2FsbCBTdWJPYmplY3Q6IA==', 'VGVtcFNUUkJbMF06IA==', 'VGVtcFNUUkJbMV06IA==', 'VGVtcFNUUkJbMl06IA==', 'VGVtcFNUUkJbM106IA==', 'R290IFVWczog', 'R290IHZlY3RvciBDdXJyZW50VmVydGV4OiA=', 'R290IHZlY3Rvcjog', 'R290IFN1Yk9iamVjdDog', 'ZGF0YXMvb2JqZWN0cy8=', 'TWVzaF9BZGRFbGVtZW50IFs=', 'VGV4dHVyZU5hbWU6', 'U0hBREVSOg==', 'V2UgSEFWZSBFRkZFQ1QgIQ==', 'bm9saWdodA==', 'dGhlIGNvbnRlbnQgTGluZXM=', 'QWRkaW5nIE1hdGVyaWFsOg==', 'RWxlbWVudCA=', 'RG9uZSBMb2FkaW5nOg==', 'VU5TRU5UOiA=', 'T1BFTkVEOiA=', 'SEVBREVSU19SRUNFSVZFRDog', 'TE9BRElORzog', 'Qm9uZUxhYl9HZW5lcmF0ZU1lc2gg', 'b25yZWFkeXN0YXRlY2hhbmdlIFs=', 'TG9hZGVkITog', 'U2V0X0JvbmU=', 'XG5cbkZvdW5kQm9uZSA=', 'UGFyZW50', 'UGFyZW50IA==', 'TGVuZ2h0', 'TGVuZ2h0IA==', 'SXNTcHJpbmc=', 'SXNTcHJpbmcg', 'U3ByaW5nU3BlZWQ=', 'U3ByaW5nU3BlZWQg', 'U3ByaW5nRGFtcGVy', 'U3ByaW5nRGFtcGVyIA==', 'TWF0cml4IA==', 'TWF0cml4UmVsYSA=', 'TWF0cml4SW52ZXJzZSA=', 'VmVydGV4X0NvdW50', 'RnJvdW5kIFZFUlRFWDog', 'VHJpYW5nbGVzX0NvdW50', 'RnJvdW5kIFRyaWFuZ2xlczog', 'RG9uZSBMb2FkZWQhOiA=', 'XG5cblxuXG5cblxuXG4qKioqKioqKiogb250aW1lb3V0IDo=', 'XG5cblxuXG5cblxuXG4=', 'ZGF0YXMvYm9uZWxhYi8=', 'Qm9uZUNvdW50', 'Qm9uZUFuaW1fTG9hZEFuaW1b', 'bGVuZ3RoIA==', 'U2V0RnJhbWU=', 'Rm91bmQgRnJhbWUg', 'Rm91bmQgTWF0cml4IA==', 'cXdlcnR5dWlvcGFzZGZnaGprbC56eGN2Ym5tIT9RV0VSVFlVSU9QQVNERkdISktMLFpYQ1ZCTk06OzAxMjM0NTY3ODkmLS86OygpJF8lQCMuLD8hLS8uIA==', 'YXplcnR5dWlvcHFzZGZnaGprbG13eGN2Ym4hPy5BWkVSVFlVSU9QUVNERkdISktMTVdYQ1ZCTiwtLjAxMjM0NTY3ODkmLS86OygpJF8lQCMuLD8hLS8uIA==', 'cXdlcnR6dWlvcGFzZGZnaGprbC55eGN2Ym5tIT9RV0VSVFpVSU9QQVNERkdISktMLFlYQ1ZCTk06OzAxMjM0NTY3ODkmLS86OygpJF8lQCMuLD8hLS8uIA==', 'PiBrZXlzPiA=', 'PiBLZXlUb0Rpc3BsYXk+IA==', 'Z290IG51bWJlcjo=', 'Zm9udF91bmljb2Rl', 'Rm9udF9Jbml0', 'Zm9udHMv', 'Y2hhcklkPQ==', 'dXZTdGFydD0=', 'dXZFbmQ9', 'eE9mZnNldD0=', 'eU9mZnNldD0=', 'eEFkdmFuY2U9', 'Z290IEZpbGU6IEN1cnJlbnRHbHlwaCA=', 'ZGF0YXMvZm9udHMv', 'RHJhd09uZUdseXBoOg==', 'c3RyLmNoYXJDb2RlQXQo', 'PiBrZXlz', 'PiBHbG9iYWxLZXk=', 'U291bmQ6IEluaXQ=', 'V2ViIEF1ZGlvIEFQSSBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlcg==', 'YXVkaW8vbXAz', 'U291bmQ6IGV4dDo=', 'YXVkaW8vb2dn', 'YXVkaW8vbXA0', 'U291bmQgTm90IFN1cHBvcnRlZA==', 'YXJyYXlidWZmZXI=', 'U291bmQ6IGxvYWQ6', 'TXVzaWNTdHJlYW1QbGF5ZXI=', 'TXVzaXF1ZTogY3JlYXRlRWxlbWVudA==', 'TXVzaXF1ZTogbXlNdXNpYy5jYW5QbGF5VHlwZQ==', 'cHJvYmFibHk=', 'YXVkaW8vb2dnOyBjb2RlY3M9InZvcmJpcyI=', 'c291cmNl', 'ZGF0YXMvbXVzaWNzLw==', 'TXVzaXF1ZTo=', 'ZGF0YXMvcmVzb3VyY2VzLnR4dD8=', 'TG9hZGVyOiBTb3VuZFs=', 'ZGF0YXMvc291bmRzLw==', 'TG9hZGVyOiBCb25lTGFiIERMQiBb', 'KioqKiBMb2FkZXI6IEJvbmVMYWIgQkxBIFs=', 'aXNCTEEg', 'XG5EYXRhUGF0aA==', 'XG4qKioqKioqXG5Mb2FkZXJfTG9hZGluZ1RocmVhZCBTVE9QXG4qKioqKioq', 'MTExMTAxMTAxMTAxMTEx', 'MDAxMDExMDAxMDAxMDAx', 'MTExMDAxMTExMTAwMTEx', 'MTExMDAxMDExMDAxMTEx', 'MTAxMTAxMTExMDAxMDAx', 'MTExMTAwMTExMDAxMTEx', 'MTExMTAwMTExMTAxMTEx', 'MTExMDAxMDAxMDAxMDAx', 'MTExMTAxMTExMTAxMTEx', 'MTExMTAxMTExMDAxMDAx', 'RExHIEluaXQgV2ViR0w=', 'ZXhwZXJpbWVudGFsLXdlYmds', 'd2Via2l0LTNk', 'bW96LXdlYmds', 'RExHX1dlYkdMIEluaXQgd2l0aDog', 'RExHX1dlYkdMIFNpemU6IA==', 'PGRpdiBjbGFzcz0iRXJyb3JESVYiIGlkPSJkbGctZXJyb3ItZGl2Ij5Db3VsZCBub3QgaW5pdGlhbGlzZSBXZWJHTDwvc3Bhbj48YnI+WW91ciBicm93c2VyIHNlZW0gdG8gbm90IHN1cHBvcnQgM0QgcmVuZGVyaW5nPGJyPlBsZWFzZSB0cnkgYWdhaW4gd2l0aCBGaXJlZm94IG9yIEdvb2dsZSBDaHJvbWU8L2Rpdj4=', 'V2ViR0xfRXJyb3I=', 'MTAwLjAl', 'U2NyZWVuOg==', 'd2luZG93Lm9ucmVzaXpl', 'b3JpZW50YXRpb25jaGFuZ2U=', 'T3JpZW50YXRpb24gQ2hhbmdl', 'QXBwbHkgT3JpZW50YXRpb24gQ2hhbmdl', 'ZGxnLXdlYmdsLWNhbnZhcw==', 'MTI3LjAuMC4x', 'TVBfVXBkYXRlVXNlckxpc3Qg', 'TVBfUHJvY2Vzc0FjdGlvbjog', 'ZGxnX3Byb3RvY29s', 'Q29ubmVjdGlvbiBFcnJvcg==', 'Q2xpZW50IENsb3NlZA==', 'c3RyaW5n', 'UmVjZWl2ZWQ6ICc=', 'R290IE15IElEOg==', 'TXVsdGlwbGF5ZXIgPlNlcnZlciBJUDog', 'c2VydmVyX2lwLnR4dD8=', 'V0VCR0xfZGVwdGhfdGV4dHVyZQ==', 'VHJ1Y2tUcmlhbHM=', 'PzAuOTMwMQ==', 'VHJ1Y2tUcmlhbHNfQmV0YTQ=', 'UGxlYXNlIHdhaXQsIGxvYWRpbmcuLi4=', 'TG9hZGluZyBMZXZlbA==', 'VG91Y2ggVG8gU3RhcnQ=', 'Q2xpY2sgVG8gU3RhcnQ=', 'VHJ1Y2sgVHJpYWxz', 'qUZBTU9CSSBJTkMu', 'RU5HSU5FIENPRElORywgR1JBUEhJQ1M=', 'RGFuaWVsIExhYnJpZXQsIERhbkxhYkdhbWVz', 'UFJPRFVDVElPTiwgQlVTSU5FU1MgREVWLg==', 'SnVsaWVuIERvbmd1eSwgQWRBc0dhbWU=', 'VEVTVEVSUw==', 'TOlhLCBFbW1hLCBNb25zaWV1ciBTLg==', 'U2VsZWN0IGEgVFJVQ0s=', 'U2VsZWN0IGEgTEVWRUw=', 'UEFVU0VE', 'V0VMTCBET05F', 'QlVTVEVE', 'RW50ZXIgWW91ciBOaWNrbmFtZQ==', 'TkVXIENBUg==', 'VU5MT0NLRUQ=', 'U01vdGhjYWFhYWEh', 'U3RhdGlj', 'QWRkIE1hdDog', 'QWRkIE1hdDog', 'Rm91bmQgTWF0ZXJpYWw6IA==', 'QWRkIEdvbGRCYWc6IA==', 'QWRkIEdvbGRCYWc6IA==', 'UG9zWDog', 'UG9zWTog', 'QWRkIFdoZWVsOiA=', 'QWRkIFdoZWVsOiA=', 'UmFkaXVzOiA=', 'QWRkIFBvbHk6IA==', 'QWRkIFBvbHk6IA==', 'U2l6ZVg6IA==', 'U2l6ZVk6IA==', 'VmVydDog', 'Rm91bmQgUG9seWdvbmUgT2JqZWN0OiA=', 'Pj4+IFZlY3RvcnMgWw==', 'Pj4+IEluZGV4IFs=', 'Pj4+IFN2', 'U3ZfQUxUOiA=', 'U3ZfQUxUOiA=', 'Pj4+IFNTdl9BTFQ=', 'QnJpZGdl', 'QmFycmVs', 'Q3J1bmNoYWJsZQ==', 'QmFja2dyb3VuZA==', 'UGluUG9pbnQ=', 'UGluZ1Bvbmc=', 'VXBEb3du', 'TGV2ZWxfU3RhcnQ=', 'TGV2ZWxfRW5k', 'QnJpZGdlX1N0YXJ0', 'Pj4+IEdvdCBCcmlkZ2UgU3RhcnQ=', 'QnJpZGdlX0NodW5r', 'Pj4+IEdvdCBCcmlkZ2UgQ2h1bms=', 'QnJpZGdlX0VuZA==', 'Pj4+IEdvdCBCcmlkZ2UgRW5k', 'QWRkIFBsYW5lOiA=', 'QWRkIFBsYW5lOiA=', 'T2Zmc2V0eDog', 'T2Zmc2V0eTog', 'Rm91bmQgUGxhbmUgT2JqZWN0OiA=', 'R290IExldmVsWw==', 'ZGF0YXMvbGV2ZWxzL2xldmVsXw==', 'ZGF0YXMvdGV4dHVyZXMvY2FyX2JvZHlf', 'Vm9pdHVyZV9hbHQ=', 'Q3J1bmNoT2JqZWN0IFBvbHlCb2R5LnNoYXBlcy5sZW5ndGg6IA==', 'Q3J1bmNoT2JqZWN0IDog', 'R2FtZV9HYW1lT3Zlcg==', 'XSBBbHRCLnZlbG9jaXR5WzFdIDog', 'VXNlclNvdW5k', 'VXNlck11c2lj', 'TWF4TGV2ZWw=', 'QmVzdFNjb3Jl', 'cGxfU2NvcmVUb3A=', 'Uk9CRVJUTzt0ZXh0dXJlcy9hdmF0YXJfZGVmYXVsdC5wbmc7MTIzNDU2Nzg5Ozc1NyxEQU47dGV4dHVyZXMvYXZhdGFyX2RlZmF1bHQucG5nOzEyMzQ1Njc5OzY2MSxKVUxJRU47dGV4dHVyZXMvYXZhdGFyX2RlZmF1bHQucG5nOzEyMzQ1ODk7NjAwLEJKT1JOO3RleHR1cmVzL2F2YXRhcl9kZWZhdWx0LnBuZzsxMjM3ODk7NTU5LEpFQU4gUElFUlJFOzE7MTIzODk7NDc4LFNBTVVFTDt0ZXh0dXJlcy9hdmF0YXJfZGVmYXVsdC5wbmc7MTI4OTs0MDksSUdHWTt0ZXh0dXJlcy9hdmF0YXJfZGVmYXVsdC5wbmc7MTI5OzMxMyxQQUJMTzt0ZXh0dXJlcy9hdmF0YXJfZGVmYXVsdC5wbmc7MTIzOzIyMixSSUNLWTt0ZXh0dXJlcy9hdmF0YXJfZGVmYXVsdC5wbmc7MTIxOzIwOCxMRUE7dGV4dHVyZXMvYXZhdGFyX2RlZmF1bHQucG5nOzEyMDsxMzYsRU1NQTt0ZXh0dXJlcy9hdmF0YXJfZGVmYXVsdC5wbmc7MTI7MTM1LA==', 'U3RhcnNMZXZlbA==', 'ZGF0YXMvdGV4dHVyZXMvYXZhdGFycy8=', 'SGlnaCBzY29yZXMgU2Nyb2xs', 'UHJlZl9Vc2VyX0F2YXRhciA=', 'VXNlciBOYW1lIEVkaXRlZA==', 'ZGF0YXMvdGV4dHVyZXMvbG9nb19mYW1vYmkucG5n', 'ZGF0YXMvdGV4dHVyZXMvbG9nb19kYW5sYWJnLnBuZw==', 'ZGF0YXMvdGV4dHVyZXMvbG9nb19hZGFzZ2FtZS5wbmc=', 'MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw', 'TXVzaWMgU3dpdGNoIE9GRg==', 'TXVzaWMgU3dpdGNoIE9O', 'U291bmQgU3dpdGNoIE9GRg==', 'U291bmQgU3dpdGNoIE9O', 'ZGF0YXMvdGV4dHVyZXMvaHRtbDVnYW1lc19sb2dvLnBuZw==', 'aHR0cDovL2h0bWw1Z2FtZXMuY29tLw==', 'R2FtZV9HYW1lT3Zlcl9TaG93U2NvcmVCb2FyZA==', 'R2FtZV9HYW1lT3Zlcl9MZXZlbFNlbGVjdGlvbg==', 'R2FtZV9HYW1lT3Zlcl9SZXN0YXJ0TGV2ZWw=', 'R2FtZV9MZXZlbF9Eb25lWw==', 'XSBTdGFyczo=', 'R2FtZV9MZXZlbERvbmVfTGV2ZWxTZWxlY3Rpb24=', 'R2FtZV9MZXZlbERvbmVfTmV4dExldmVs', 'R2FtZV9MZXZlbERvbmVfUmVzdGFydExldmVs', 'R2FtZV9Jbml0', 'aW5nYW1l', 'VG90YWxUcmlhbmdsZXMg', 'TW91c2Ug', 'S2V5QiBNb3VzZSA=', 'UGh5c2ljX0JvZHlDb3VudCA=', 'R2FtZVZlcnNpb246IA==', 'UmVzb3VyY2VDb3VudCA=', 'TG9hZGVyUG9zaXRpb24g', 'RGF0YVRvRG93bmxvYWQg', 'SW1hZ2VUb0Rvd25sb2FkIA==', 'TWVzaFRvRG93bmxvYWQg', 'QW5pbVRvRG93bmxvYWQg', 'U291bmRUb0Rvd25sb2FkIA==', 'TXVzaWMgUGF1c2VkOiA=', 'RGV2aWNlIFBpeGVsIFJhdGlvIA==', 'R2xvYmFsS2V5IA==', 'RGVsdGFUaW1lIA==', 'VG91Y2ggWw==', ];

function _Tx(_ID) {
    return atob(CompString[_ID]);
}
var v162 = "en";

function f1(LanguageID) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject(_Tx(0));
    }
    xmlhttp.onreadystatechange = function() {
        /*
            famobi: allow request status zero if file protocol is used
            (usecase iOS UIWebView)
        */
        var protocolRegex = new RegExp('^file:', 'i');
        var isFileProtocol = protocolRegex.test(xmlhttp.responseURL);

        if (xmlhttp.readyState == 4
        && (xmlhttp.status == 200 || isFileProtocol && xmlhttp.status === 0)) {
            v162 = LanguageID + "";
            var str = xmlhttp.responseText;
            var OneLine = str.split('\n');
            if (OneLine.length < 3) return;
            var TextID = 0;
            for (i = 0; i < OneLine.length; i++) {
                var test_str = OneLine[i];
                var start_pos = test_str.indexOf('"') + 1;
                if (start_pos == 1) {
                    famobi.log(_Tx(1) + start_pos);
                    var end_pos = test_str.indexOf('"', start_pos);
                    var text_to_get = test_str.substring(start_pos, end_pos)
                    v289[TextID] = text_to_get;
                    TextID++;
                }
            }
        }
    }
    xmlhttp.open("GET", _Tx(2) + LanguageID + ".txt", true);
    xmlhttp.send();
}

function f32() {
    return famobi.getCurrentLanguage();
    var userLang = navigator.language || navigator.userLanguage;
    famobi.log(_Tx(3) + userLang);
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var LocalPos = vars[i].search(_Tx(4));
        if (LocalPos == 0) {
            var ForceLocal = vars[i].substring(7, 9);
            famobi.log(_Tx(6) + ForceLocal + "'");
            userLang = ForceLocal + "-" + ForceLocal;
        }
    }
    return userLang;
}

function f5() {
    var userLang = f32();
    if (userLang.search("fr") != -1) f1("fr");
    if (userLang.search("de") != -1) f1("de");
    if (userLang.search("es") != -1) f1("es");
    if (userLang.search("nl") != -1) f1("nl");
    if (userLang.search("pl") != -1) f1("pl");
    if (userLang.search("pt") != -1) f1("pt");
    if (userLang.search("ru") != -1) f1("ru");
    if (userLang.search("tr") != -1) f1("tr");
}

function f222(argString) {
    if (argString === null || typeof argString === _Tx(7)) {
        return '';
    }
    var string = (argString + '');
    var utftext = '',
        start, end, stringl = 0;
    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;
        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                (c1 >> 6) | 192, (c1 & 63) | 128
            );
        } else if ((c1 & 0xF800) != 0xD800) {
            enc = String.fromCharCode(
                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        } else {
            if ((c1 & 0xFC00) != 0xD800) {
                throw new RangeError(_Tx(8) + n);
            }
            var c2 = string.charCodeAt(++n);
            if ((c2 & 0xFC00) != 0xDC00) {
                throw new RangeError(_Tx(9) + (n - 1));
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode(
                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }
    if (end > start) {
        utftext += string.slice(start, stringl);
    }
    return utftext;
}

function md5(str) {
    // discuss at: http://phpjs.org/functions/md5/
    // original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // improved by: Michael White (http://getsprink.com)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // input by: Brett Zamir (http://brett-zamir.me)
    // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    var xl;
    var rotateLeft = function(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    };
    var addUnsigned = function(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    };
    var _F = function(x, y, z) {
        return (x & y) | ((~x) & z);
    };
    var _G = function(x, y, z) {
        return (x & z) | (y & (~z));
    };
    var _H = function(x, y, z) {
        return (x ^ y ^ z);
    };
    var _I = function(x, y, z) {
        return (y ^ (x | (~z)));
    };
    var _FF = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var _GG = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var _HH = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var _II = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var convertToWordArray = function(str) {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = new Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };
    var wordToHex = function(lValue) {
        var wordToHexValue = '',
            wordToHexValue_temp = '',
            lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            wordToHexValue_temp = '0' + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
        }
        return wordToHexValue;
    };
    var x = [],
        k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22,
        S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20,
        S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23,
        S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;
    str = this.f222(str);
    x = convertToWordArray(str);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    xl = x.length;
    for (k = 0; k < xl; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }
    var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    return temp.toLowerCase();
}
var ColizWord = new Array();
var v163 = new Array();
var v164 = new Array();
var v238 = 0;
var v196 = 0;

function f223() {
    this.HashCount_X = 1;
    this.HashCount_Y = 1;
    this.HashSize_X = 0;
    this.HashSize_Y = 0;
    this.HashPos_Left = 0;
    this.HashPos_Right = 0;
    this.HashPos_Top = 0;
    this.HashPos_Bottom = 0;
    this.HashDetected = 0;
    this.HashDetectedCount = 0;
    this.StaticSegments;
    this.StaticSegmentsCount = 0;
    this.HashStaticsList;
    this.Dyna_ax = 0;
    this.Dyna_bx = 0;
    this.Dyna_cx = 0;
    this.Dyna_dx = 0;
    this.Dyna_ay = 0;
    this.Dyna_by = 0;
    this.Dyna_cy = 0;
    this.Dyna_dy = 0;
}

function f174() {
    this.ax = 0;
    this.ay = 0;
    this.bx = 0;
    this.by = 0;
}
var v17 = 0;

function f10(Path) {
    v17++;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            var str = xmlhttp.responseText;
            var OneLine = str.split("\n");
            var NeedFirtSegment = 1;
            var FirstSeg_X = 0;
            var FirstSeg_Z = 0;
            var PrevSeg_X = 0;
            var PrevSeg_Z = 0;
            var Seg_X = 0;
            var Seg_Z = 0;
            for (var i = 0; i < OneLine.length; i++) {
                if (OneLine[i].search("Sv:") == 0) {
                    var ThisLine = OneLine[i].split(" ");
                    Seg_X = parseFloat(ThisLine[1]);
                    Seg_Z = parseFloat(ThisLine[2]);
                    if (NeedFirtSegment == 1) {
                        NeedFirtSegment = 0;
                        FirstSeg_X = Seg_X;
                        FirstSeg_Z = Seg_Z;
                    } else {
                        f22(Seg_X, Seg_Z, PrevSeg_X, PrevSeg_Z);
                    }
                    PrevSeg_X = Seg_X;
                    PrevSeg_Z = Seg_Z;
                }
                if (OneLine[i].search(_Tx(13)) == 0) {
                    NeedFirtSegment = 1;
                    f22(FirstSeg_X, FirstSeg_Z, PrevSeg_X, PrevSeg_Z);
                }
            }
            famobi.log(_Tx(14));
            v17--;
        }
    }
    xmlhttp.open("GET", _Tx(15) + Path + _Tx(16) + v222, true);
    xmlhttp.send();
}

function f131() {
    ColizWord = [];
    ColizWord = new f223();
    ColizWord.StaticSegmentsCount = 0;
    ColizWord.HashDetected = new Array();
    for (var i = 0; i < 20; i++) ColizWord.HashDetected.push;
    ColizWord.StaticSegments = new Array();
    ColizWord.HashStaticsList = new Array();
    for (var i = 0; i < 100 * 100; i++) {
        ColizWord.HashStaticsList.push;
        ColizWord.HashStaticsList[i] = new Array();
    }
    for (var i = 0; i < 100; i++) {
        v163.push;
        v164.push;
    }
}
var v131;
var v132;

function f42(x, y, x1, y1, x2, y2) {
    v131 = 0;
    v132 = 0;
    var A = x - x1;
    var B = y - y1;
    var C = x2 - x1;
    var D = y2 - y1;
    var dot = A * C + B * D;
    var len_sq = C * C + D * D;
    var param = -1;
    if (len_sq != 0)
        param = dot / len_sq;
    var xx, yy;
    if (param < 0) {
        xx = x1;
        yy = y1;
    } else if (param > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
    }
    v131 = xx;
    v132 = yy;
    var dx = x - xx;
    var dy = y - yy;
    return Math.sqrt(dx * dx + dy * dy);
}

function f2(Cx, Cy, Radius, x1, y1, x2, y2) {
    var distance = f42(Cx, Cy, x1, y1, x2, y2);
    if (distance > 0 && distance < Radius) return true;
    return false;
}
var v256 = 0;
var v257 = 0;
var v3;

function f6(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
    if (v196 == 1) famobi.log(_Tx(20));
    var denom = ((b2y - b1y) * (a2x - a1x)) - ((b2x - b1x) * (a2y - a1y));
    if (denom == 0) return false;
    var ua = (((b2x - b1x) * (a1y - b1y)) - ((b2y - b1y) * (a1x - b1x))) / denom;
    var ub = (((a2x - a1x) * (a1y - b1y)) - ((a2y - a1y) * (a1x - b1x))) / denom;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;
    v256 = a1x + ua * (a2x - a1x);
    v257 = a1y + ua * (a2y - a1y);
    v163[v238] = v256;
    v164[v238] = v257;
    v238++;
    if (v238 > 100) v238 = 0;
    ColDirX += v256;
    ColDirY += v257;
    ColDirCount++;
    if (v196 == 1) famobi.log(_Tx(21) + ColDirCount + _Tx(22) + ColDirX + _Tx(23) + ColDirY);
    return true;
}

function f0(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
    if (v196 == 1) famobi.log(_Tx(24) + a1x + " " + a1y + " " + a2x + " " + a2y + " " + b1x + " " + b1y + " " + b2x + " " + b2y);
    var denom = ((b2y - b1y) * (a2x - a1x)) - ((b2x - b1x) * (a2y - a1y));
    if (denom == 0) return false;
    if (v196 == 1) famobi.log(_Tx(25));
    var ua = (((b2x - b1x) * (a1y - b1y)) - ((b2y - b1y) * (a1x - b1x))) / denom;
    var ub = (((a2x - a1x) * (a1y - b1y)) - ((a2y - a1y) * (a1x - b1x))) / denom;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;
    if (v196 == 1) famobi.log(_Tx(26));
    v256 = a1x + ua * (a2x - a1x);
    v257 = a1y + ua * (a2y - a1y);
    if (ColDirY > v257) {
        v163[0] = v256;
        v164[0] = v257;
        ColDirX = v256;
        ColDirY = v257;
        ColDirCount++;
    }
    if (b2x < b1x) {
        v70 = b1x - b2x;
        v71 = b1y - b2y;
    } else {
        v70 = b2x - b1x;
        v71 = b2y - b1y;
    }
    var length = Math.sqrt(v70 * v70 + v71 * v71);
    if (length == 0) length = 0.000000001;
    v70 /= length;
    v71 /= length;
    if (v196 == 1) famobi.log(_Tx(27) + ColDirCount + ", ColDirX" + ColDirX + ",ColDirY " + ColDirY);
    return true;
}
var v70 = 0;
var v71 = 0;

function f43(Cx, Cy, Radius) {
    f23(Cx, Cy, Radius * 2.1, Radius * 2.1);
    v70 = 0;
    v71 = 0;
    for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
        var HashID = ColizWord.HashDetected[i];
        if (HashID > -1 && HashID < 10000) {
            var SegCount = ColizWord.HashStaticsList[HashID].length;
            for (var j = 0; j < SegCount; j++) {
                var SegID = ColizWord.HashStaticsList[HashID][j];
                if (
                    f2(Cx, Cy, Radius,
                        ColizWord.StaticSegments[SegID].ax,
                        ColizWord.StaticSegments[SegID].ay,
                        ColizWord.StaticSegments[SegID].bx,
                        ColizWord.StaticSegments[SegID].by) ==
                    true) {
                    if (ColizWord.StaticSegments[SegID].ax > ColizWord.StaticSegments[SegID].bx) {
                        v70 = ColizWord.StaticSegments[SegID].ax - ColizWord.StaticSegments[SegID].bx;
                        v71 = ColizWord.StaticSegments[SegID].ay - ColizWord.StaticSegments[SegID].by;
                    } else {
                        v70 = ColizWord.StaticSegments[SegID].bx - ColizWord.StaticSegments[SegID].ax;
                        v71 = ColizWord.StaticSegments[SegID].by - ColizWord.StaticSegments[SegID].ay;
                    }
                    var length = Math.sqrt(v70 * v70 + v71 * v71);
                    if (length == 0) length = 0.000000001;
                    v70 /= length;
                    v71 /= length;
                    return true;
                }
            }
        }
    }
    return false;
}

function f75(ax, ay, bx, by) {
    ColizWord.Dyna_ax = ax;
    ColizWord.Dyna_ay = ay;
    ColizWord.Dyna_bx = bx;
    ColizWord.Dyna_by = by;
    ColizWord.Dyna_cx = ax;
    ColizWord.Dyna_cy = ay;
    ColizWord.Dyna_dx = bx;
    ColizWord.Dyna_dy = by;
    ColDirX = 0;
    ColDirY = 10000000;
    ColDirCount = 0;
    var centerX = (ax + bx) * 0.5;
    var centerY = (ay + by) * 0.5;
    var SizeX = Math.abs(bx - ax);
    var SizeY = Math.abs(by - ay);
    if (SizeX < 1) SizeX = 1;
    if (SizeY < 1) SizeY = 1;
    f23(centerX, centerY, SizeX, SizeY);
    for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
        var HashID = ColizWord.HashDetected[i];
        if (HashID > -1 && HashID < 10000) {
            var SegCount = ColizWord.HashStaticsList[HashID].length;
            for (var j = 0; j < SegCount; j++) {
                var SegID = ColizWord.HashStaticsList[HashID][j];
                f0(ax, ay, bx, by, ColizWord.StaticSegments[SegID].ax, ColizWord.StaticSegments[SegID].ay, ColizWord.StaticSegments[SegID].bx, ColizWord.StaticSegments[SegID].by);
            }
        }
    }
}

function f88(ax, ay, bx, by, cx, cy, dx, dy) {
    ColizWord.Dyna_ax = ax;
    ColizWord.Dyna_ay = ay;
    ColizWord.Dyna_bx = bx;
    ColizWord.Dyna_by = by;
    ColizWord.Dyna_cx = cx;
    ColizWord.Dyna_cy = cy;
    ColizWord.Dyna_dx = dx;
    ColizWord.Dyna_dy = dy;
    ColDirX = 0;
    ColDirY = 0;
    ColDirCount = 0;
    for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
        var HashID = ColizWord.HashDetected[i];
        if (HashID > -1 && HashID < 10000) {
            var SegCount = ColizWord.HashStaticsList[HashID].length;
            for (var j = 0; j < SegCount; j++) {
                var SegID = ColizWord.HashStaticsList[HashID][j];
                f6(ax, ay, bx, by, ColizWord.StaticSegments[SegID].ax, ColizWord.StaticSegments[SegID].ay, ColizWord.StaticSegments[SegID].bx, ColizWord.StaticSegments[SegID].by);
                f6(bx, by, cx, cy, ColizWord.StaticSegments[SegID].ax, ColizWord.StaticSegments[SegID].ay, ColizWord.StaticSegments[SegID].bx, ColizWord.StaticSegments[SegID].by);
                f6(cx, cy, dx, dy, ColizWord.StaticSegments[SegID].ax, ColizWord.StaticSegments[SegID].ay, ColizWord.StaticSegments[SegID].bx, ColizWord.StaticSegments[SegID].by);
                f6(dx, dy, ax, ay, ColizWord.StaticSegments[SegID].ax, ColizWord.StaticSegments[SegID].ay, ColizWord.StaticSegments[SegID].bx, ColizWord.StaticSegments[SegID].by);
            }
        }
    }
    if (ColDirCount > 0) {
        ColDirX /= ColDirCount;
        ColDirY /= ColDirCount;
    }
}

function f22(ax, ay, bx, by) {
    ColizWord.StaticSegments.push;
    ColizWord.StaticSegments[ColizWord.StaticSegmentsCount] = new f174();
    ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].ax = ax;
    ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].ay = ay;
    ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].bx = bx;
    ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].by = by;
    ColizWord.StaticSegmentsCount++;
}

function f23(PosX, PosY, SizeX, SizeY) {
    ColizWord.HashDetectedCount = 0;
    var x = PosX - ColizWord.HashPos_Left;
    var y = PosY - ColizWord.HashPos_Top;
    var Left = Math.floor((x - SizeX * 0.5) / ColizWord.HashSize_X);
    var Top = Math.floor((y - SizeY * 0.5) / ColizWord.HashSize_Y);
    var Right = Math.floor((x + SizeX * 0.5) / ColizWord.HashSize_X);
    var Bottom = Math.floor((y + SizeY * 0.5) / ColizWord.HashSize_Y);
    for (var x = Left; x < Right + 1; x++) {
        for (var y = Top; y < Bottom + 1; y++) {
            ColizWord.HashDetected[ColizWord.HashDetectedCount] = Math.floor(x + y * ColizWord.HashCount_X);
            ColizWord.HashDetectedCount++;
        }
    }
}

function f89(shiftX) {
    for (var i = 0; i < ColizWord.StaticSegmentsCount; i++) {
        ColizWord.StaticSegments[i].ax -= shiftX;
        ColizWord.StaticSegments[i].bx -= shiftX;
    }
}

function f16(BeloX) {
    return;
    for (var i = 0; i < ColizWord.StaticSegmentsCount; i++) {
        if (ColizWord.StaticSegments[i].bx < BeloX) {}
    }
}

function f132() {
    ColizWord.HashStaticsList = new Array();
    for (var i = 0; i < 100 * 100; i++) {
        ColizWord.HashStaticsList.push;
        ColizWord.HashStaticsList[i] = new Array();
    }
}

function f33() {
    for (var i = 0; i < ColizWord.StaticSegmentsCount; i++) {
        var PosX = (ColizWord.StaticSegments[i].ax + ColizWord.StaticSegments[i].bx) * 0.5;
        var PosY = (ColizWord.StaticSegments[i].ay + ColizWord.StaticSegments[i].by) * 0.5;
        var SizeX = Math.abs(ColizWord.StaticSegments[i].bx - ColizWord.StaticSegments[i].ax);
        var SizeY = Math.abs(ColizWord.StaticSegments[i].by - ColizWord.StaticSegments[i].ay);
        f23(PosX, PosY, SizeX, SizeY);
        for (var j = 0; j < ColizWord.HashDetectedCount; j++) {
            var HashID = ColizWord.HashDetected[j];
            if (HashID > -1 && HashID < 10000) {
                ColizWord.HashStaticsList[HashID].push(i);
            }
        }
    }
    famobi.log(_Tx(30) + ColizWord.StaticSegmentsCount);
}

function f76() {
    ColizWord.HashSize_X = (ColizWord.HashPos_Right - ColizWord.HashPos_Left) / ColizWord.HashCount_X;
    ColizWord.HashSize_Y = (ColizWord.HashPos_Bottom - ColizWord.HashPos_Top) / ColizWord.HashCount_Y;
}

function f34(HashPos_Left, HashPos_Top, HashPos_Right, HashPos_Bottom) {
    ColizWord.HashPos_Left = HashPos_Left;
    ColizWord.HashPos_Top = HashPos_Top;
    ColizWord.HashPos_Right = HashPos_Right;
    ColizWord.HashPos_Bottom = HashPos_Bottom;
    f76();
}

function f77(HashCount_X, HashCount_Y) {
    if (HashCount_X > 100) HashCount_X = 100;
    if (HashCount_Y > 100) HashCount_Y = 100;
    ColizWord.HashCount_X = HashCount_X;
    ColizWord.HashCount_Y = HashCount_Y;
    f76();
}
var v279

function f266(PosX, PosY, PosXB, PosYB) {
    var WallLength = Math.sqrt((PosX - PosXB) * (PosX - PosXB) + (PosY - PosYB) * (PosY - PosYB));
    var WallAngle = -f247(PosX, PosY, PosXB, PosYB);
    f203();
    f231(PosX, PosY, 0);
    f296(WallAngle, 0, 0, 1);
    f183(-v279, -v279,
        v279, WallLength + v279);
    f230();
}
var v133 = 0;

function f133() {
    v279 = 5.5;
    f203();
    f231(0, 5, 0);
    f296(90, 1, 0, 0);
    gl.enable(gl.BLEND);
    gl.depthMask(false);
    f228(3);
    for (var x = 0; x < ColizWord.HashCount_X; x++) {
        var PosX = ColizWord.HashPos_Left + x * ColizWord.HashSize_X;
        for (var y = 0; y < ColizWord.HashCount_Y; y++) {
            f181(0.0, 0.0, 0.0, 0.8);
            var PosY = ColizWord.HashPos_Top + y * ColizWord.HashSize_Y;
            for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
                if (ColizWord.HashDetected[i] == Math.floor(x + y * ColizWord.HashCount_X)) {
                    f181(0.0, 1.0, 0.0, 0.2);
                    break;
                }
            }
            f183(PosX + v279, PosY + v279,
                PosX + ColizWord.HashSize_X - v279, PosY + ColizWord.HashSize_Y - v279);
        }
    }
    f181(1.0, 1.0, 0.0, 0.2);
    for (var i = 0; i < ColizWord.StaticSegmentsCount; i++) {
        f266(ColizWord.StaticSegments[i].ax, ColizWord.StaticSegments[i].ay, ColizWord.StaticSegments[i].bx, ColizWord.StaticSegments[i].by);
    }
    f181(1.0, 1.0, 0.0, 1.0);
    for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
        var HashID = ColizWord.HashDetected[i];
        if (HashID > -1 && HashID < 10000) {
            var SegCount = ColizWord.HashStaticsList[HashID].length;
            for (var j = 0; j < SegCount; j++) {
                var SegID = ColizWord.HashStaticsList[HashID][j];
                f266(ColizWord.StaticSegments[SegID].ax, ColizWord.StaticSegments[SegID].ay, ColizWord.StaticSegments[SegID].bx, ColizWord.StaticSegments[SegID].by);
            }
        }
    }
    v279 = 5.5;
    f181(0.0, 1.0, 0.0, 1.0);
    f266(ColizWord.Dyna_ax, ColizWord.Dyna_ay, ColizWord.Dyna_bx, ColizWord.Dyna_by);
    f266(ColizWord.Dyna_bx, ColizWord.Dyna_by, ColizWord.Dyna_cx, ColizWord.Dyna_cy);
    f266(ColizWord.Dyna_cx, ColizWord.Dyna_cy, ColizWord.Dyna_dx, ColizWord.Dyna_dy);
    f266(ColizWord.Dyna_dx, ColizWord.Dyna_dy, ColizWord.Dyna_ax, ColizWord.Dyna_ay);
    f181(1.0, 0.0, 0.0, 1.0);
    for (var i = 0; i < 100; i++)
        f183(v163[i] - 10, v164[i] - 10,
            v163[i] + 10, v164[i] + 10);
    gl.disable(gl.BLEND);
    gl.depthMask(true);
    f230();
}
var MouseClick = 0;
var v197 = 0;
var v258 = "";
var keysDown = {};
var v259 = 0;
var v303 = -1;
var v304 = -1;

function f90() {
    /*
    document.body.ontouchstart=function(e) {
    if (e && e.preventDefault) { e.preventDefault(); }
    if (e && e.stopPropagation) { e.stopPropagation(); }
    return false;
    }
    document.body.touchmove=function(e) {
    if (e && e.preventDefault) { e.preventDefault(); }
    if (e && e.stopPropagation) { e.stopPropagation(); }
    return false;
    }
    */
}

function f151(value) {
    if (dlg_keyboard_on_screen == 1) {
        v60 = value;
        v197 = 0;
    } else {
        v60 = 0;
        v197 = value;
    }
}

function f224(el, X, Y) {
    Realv303 = X;
    Realv304 = Y;
    var CanvasX = WebGL_canvas.width;
    var CanvasY = WebGL_canvas.height;
    var TempX = X - WebGL_canvas.offsetLeft;
    var TempY = Y - WebGL_canvas.offsetTop;
    if (isNaN(TempX) == false && isNaN(TempY) == false) {
        OLD_v303 = v303;
        OLD_v304 = v304;
        var Tempv303 = X;
        var Tempv304 = Y;
        Tempv303 *= v204 / v221;
        Tempv304 *= v176 / v183;
        Tempv303 = Math.floor(Tempv303);
        Tempv304 = Math.floor(Tempv304);
        if (isNaN(Tempv304) == true) Tempv304 = 0;
        if (isNaN(Tempv303) == true) Tempv303 = 0;
        if (Tempv303 < 0) Tempv303 = 0;
        if (Tempv304 < 0) Tempv304 = 0;
        if (Tempv303 > v204) Tempv303 = v204;
        if (Tempv304 > v176) Tempv304 = v176;
        if (dlg_keyboard_on_screen == 1) {
            v212 = Tempv303;
            v213 = Tempv304;
            v303 = -1;
            v304 = -1;
        } else {
            v303 = Tempv303;
            v304 = Tempv304;
        }
    }
}

function f111() {
    if (v197 == 0 && MouseClick == -1) MouseClick = 0;
    if (MouseClick == 1) MouseClick = -1;
    if (v197 == 1 && MouseClick == 0) MouseClick = 1;
}
var v96 = [];
var v165 = 0;

function f225() {
    this.x = 0;
    this.y = 0;
    this.Touch_id = 0;
}

function f226() {
    v96 = [];
    v165 = 0;
}

function f35(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var touches = evt.changedTouches;
    var ShouldAddTouch;
    if (dlg_keyboard_on_screen == 1) return;
    for (var i = 0; i < touches.length; i++) {
        ShouldAddTouch = 1;
        for (var j = 0; j < v165; j++) {
            if (v96[j].Touch_id == touches[i].identifier) {
                v96[j].x = touches[i].pageX;
                v96[j].y = touches[i].pageY;
                ShouldAddTouch = 0;
                break;
            }
        }
        if (ShouldAddTouch == 1) {
            var StartTouch = v165;
            v96.push();
            v96[v165] = new f225();
            v96[v165].x = touches[i].pageX;
            v96[v165].y = touches[i].pageY;
            v96[v165].Touch_id = touches[i].identifier;
            v165++;
        }
    }
}

function f56(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        for (var j = 0; j < v165; j++) {
            if (v96[j].Touch_id == touches[i].identifier) {
                v96.splice(j, 1);
                v165--;
                break;
            }
        }
    }
}

function f44(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var touches = evt.changedTouches;
    if (dlg_keyboard_on_screen == 1) return;
    for (var i = 0; i < touches.length; i++) {
        for (var j = 0; j < v165; j++) {
            if (v96[j].Touch_id == touches[i].identifier) {
                v96[j].x = touches[i].pageX;
                v96[j].y = touches[i].pageY;
                break;
            }
        }
    }
}

function f175(ax, ay, bx, by) {
    if (MouseClick == 1 && v303 >= ax && v303 <= bx && v304 >= ay && v304 <= by) {
        MouseClick = -1;
        return 1;
    }
    return 0;
}

function f176(ax, ay, bx, by) {
    if (v197 == 1 && v303 >= ax && v303 <= bx && v304 >= ay && v304 <= by) return 1;
    for (var i = 0; i < v165; i++) {
        var x = v96[i].x * v204 / v221;
        var y = v96[i].y * v176 / v183;
        if (x > ax && x < bx && y > ay && y < by) return 1;
    }
    return 0;
}
var v72 = -1;

function f57() {
    f90();
    WebGL_canvas.addEventListener(_Tx(31), function(e) {
        f35(e);
        f224(WebGL_canvas, e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        f151(1);
        window.scrollTo(0, 1);
    }, false);
    WebGL_canvas.addEventListener(_Tx(32), function(e) {
        f44(e);
        f224(WebGL_canvas, e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        f151(1);
        window.scrollTo(0, 1);
    }, false);
    WebGL_canvas.addEventListener(_Tx(33), function(e) {
        f56(e);
        if (v258.length > 5) {
            window.open(v258);
            v258 = "";
        }
        f151(0);
        if (v32 == 1 && v63 == 1) {
            v32 = 0;
            f142(0.01);
            f259(1);
            f142(1.0);
        }
        if (v0 == 1 && (v297 == null || v297.paused == true)) {
            v297.load();
            var promise = v297.play();
            if (promise) {
                //Older browsers may not return a promise, according to the MDN website
                promise.catch(function(error) {
                    // console.error(error);
                });
            }
            v0 = 0;
        }
        window.scrollTo(0, 1);
    }, false);
    WebGL_canvas.addEventListener(_Tx(34), function(e) {
        f56(e);
        if (v258.length > 5) {
            window.open(v258);
            v258 = "";
        }
        f151(0);
        window.scrollTo(0, 1);
    }, false);
    WebGL_canvas.addEventListener(_Tx(35), function(e) {
        f56(e);
        f151(0);
        window.scrollTo(0, 1);
    }, false);
    if (v100 == 0) {
        WebGL_canvas.onmousemove = function(e) {
            f224(WebGL_canvas, e.pageX, e.pageY);
        }
        WebGL_canvas.onmousedown = function(e) {
            if (v258.length > 5) {
                window.open(v258);
                v258 = "";
            }
            f224(WebGL_canvas, e.pageX, e.pageY);
            f151(1);
        }
        WebGL_canvas.onmouseup = function(e) {
            if (v258.length > 5) {
                window.open(v258);
                v258 = "";
            }
            f151(0);
        }
        WebGL_canvas.onmouseout = function(e) {
            if (v258.length > 5) {
                window.open(v258);
                v258 = "";
            }
            f151(0);
        }
        window.addEventListener(_Tx(36), function(e) {
            if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
            KeyIsDown = 1;
            v259 = e.keyCode;
            keysDown[e.keyCode || e.which] = true;
            if (keysDown[37] == 1) keysDown[39] = 0;
            if (keysDown[39] == 1) keysDown[37] = 0;
            if (keysDown[38] == 1) keysDown[40] = 0;
            if (keysDown[40] == 1) keysDown[38] = 0;
            if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
            WebGL_canvas.focus();
        }, false);
        window.addEventListener("keyup", function(e) {
            KeyIsDown = 0;
            v259 = 0;
            WebGL_canvas.focus();
            delete keysDown[e.keyCode || e.which];
        }, false);
        window.addEventListener(_Tx(38), function(e) {
            v72 = String.fromCharCode(e.charCode);
            v8 = v8 + "" + String.fromCharCode(e.charCode);
            WebGL_canvas.focus();
        }, false);
    }
}
var DataToDownload = 0;
var v73 = 0;
var v97 = 0;
var v98 = 0;
var v74 = 0;
var v260 = 0;
var v99 = 0;
var v239 = 0;
var v240 = 0;
var v198 = 0;
var v199 = 0;
var v241 = 180.0 / Math.PI;

function f267(variable) {
    return Math.cos(variable * 0.01745329251);
}

function f268(variable) {
    return Math.sin(variable * 0.01745329251);
}

function f269(variable) {
    return Math.cos(variable);
}

function f270(variable) {
    return Math.sin(variable);
}

function f247(xa, za, xb, zb) {
    return 270.0 - Math.atan2(za - zb, xa - xb) * v241;
}

function f112(xa, za, xb, zb) {
    var dy = za - zb;
    var dx = xa - xb;
    var theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;
    return theta;
}

function f177(xa, za, xb, zb) {
    var dy = za - zb;
    var dx = xa - xb;
    var theta = Math.atan2(dy, dx);
    return theta;
}

function f152() {
    var myWidth = 100;
    if (typeof(window.innerWidth) == _Tx(40)) {
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        myWidth = document.documentElement.clientWidth;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myWidth = document.body.clientWidth;
    }
    return myWidth;
}

function f134() {
    var myHeight = 100;
    if (typeof(window.innerWidth) == 'number') {
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myHeight = document.body.clientHeight;
    }
    return myHeight;
}
var Monetisation_IsFamobi = 0;
var Monetisation_FamobiAdOnScreen = 0;
var Monetisation_PHPpath = "php/";

function f113() {
    if (typeof famobi_InUse == _Tx(42)) {
        famobi_InUse();
    }
}

function f17() {
    if (Monetisation_FamobiAdOnScreen == 1) return 1;
    return 0;
}

function f24() {
    Stanislic_SendInfo(_Tx(44));
    if (Monetisation_IsFamobi == 1) famobi_moreGamesLink();
}
var v100 = 0;
var v75 = 0;
var v261 = 0;
var v295 = 0;
var v200 = 0;

function f292() {
    famobi.log(navigator.userAgent.toLowerCase());
    var ChromeStrings = ['crios', _Tx(45)];
    var i = 0;
    for (i = 0; i < ChromeStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(ChromeStrings[i]);
        if (MOBILE_Search > -1) {
            v261 = 1;
            return 1;
        }
    }
    return 0;
}

function f293() {
    var ChromeStrings = ['crios'];
    var i = 0;
    for (i = 0; i < ChromeStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(ChromeStrings[i]);
        if (MOBILE_Search > -1) {
            return 0;
        }
    }
    var MobileStrings = [_Tx(46)];
    var i = 0;
    for (i = 0; i < MobileStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(MobileStrings[i]);
        if (MOBILE_Search > -1) {
            return 1;
        }
    }
    return 0;
}

function f271() {
    var MobileStrings = [_Tx(47), "bean"];
    var i = 0;
    for (i = 0; i < MobileStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(MobileStrings[i]);
        if (MOBILE_Search > -1) {
            v75 = 1;
            return 1;
        }
    }
    return 0;
}

function f306() {
    var MobileStrings = [_Tx(48), 'ipad'];
    var i = 0;
    for (i = 0; i < MobileStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(MobileStrings[i]);
        if (MOBILE_Search > -1) {
            v200 = 1;
            return 1;
        }
    }
    v200 = 0;
    return 0;
}

function f305() {
    var MobileStrings = ['os 8_'];
    var i = 0;
    for (i = 0; i < MobileStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(MobileStrings[i]);
        if (MOBILE_Search > -1) {
            v295 = 1;
            return 1;
        }
    }
    return 0;
}

function f294() {
    var MobileStrings = [_Tx(49), 'silk', _Tx(50), _Tx(51), 'iphone', 'ipad', 'android', _Tx(52), 'nokia', _Tx(53), _Tx(54), _Tx(55), _Tx(56)];
    var i = 0;
    for (i = 0; i < MobileStrings.length; i++) {
        var MOBILE_Search = navigator.userAgent.toLowerCase().search(MobileStrings[i]);
        if (MOBILE_Search > -1) {
            f271();
            v100 = 1;
            return 1;
        }
    }
    v100 = 0;
    return 0;
}
var Pref_User_Sound = 1;
var v76 = 1;
var v201 = null;
var v134 = null;
var v52 = 1;
var v101 = null;
var v77 = "none";

function f272(PrefID) {
    return famobi.localStorage.getItem(v184 + PrefID);
}

function f273(PrefID, Data) {
    famobi.localStorage.setItem(v184 + PrefID, Data);
}

function f274() {
    v134 = f272(_Tx(58));
    if (v134 == null) {
        var d = new Date();
        var Time = d.getTime();
        v134 = md5("mykey" + Time + Math.random() * 256);
        f273("UserKey", v134);
    }
    v201 = f272(_Tx(57));
    if (v201 == null) {
        v201 = md5("UserID" + v134);
        f273("UserID", v201);
    }
    v52 = f272(_Tx(59));
    if (v52 < 1) {
        v52 = 1;
        f273("UserAvatar", v52);
    }
    v101 = f272(_Tx(60));
    if (v101 == null) {
        f196(0, 0, 0);
        v101 = "Pilot" + Math.floor((50000 + Math.random() * 50000) * 0.1);
        f273("UserName", v101);
    }
}
var ScoresTable = [];
var v102 = 20;
var v103 = 0;
var v78 = 0;
var Score_PlayerMax = 0;

function f227() {
    this.LastUpdate = -1;
    this.Name = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.Score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.Rank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.Avatar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.PlayerRank = 0;
}

function f248() {
    for (var i = 0; i < v102; i++) {
        ScoresTable.push();
        ScoresTable[i] = new f227();
    }
}

function f275(Categorie) {

    if(window.famobi.hasFeature("standalone") || !window.famobi.hasFeature("leaderboard")) {
        return false;
    }

    v78 = 0;
    v103 = 0;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        /*
            famobi: allow request status zero if file protocol is used
            (usecase iOS UIWebView)
        */
        var protocolRegex = new RegExp('^file:', 'i');
        var isFileProtocol = protocolRegex.test(xmlhttp.responseURL);

        if (xmlhttp.readyState == 4
        && (xmlhttp.status == 200 || isFileProtocol && xmlhttp.status === 0)) {
            ScoresTable[Categorie].Rank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            v103 = 0;
            var str = xmlhttp.responseText;
            var OneLine = str.split(",");
            var i;
            if (OneLine.length < 3) return;
            for (i = 0; i < OneLine.length; i += 3) {
                if (v103 > 19) {
                    v78 = v103;
                    return;
                }
                if (OneLine[i].length < 1) {
                    v78 = v103;
                    return;
                }
                if (OneLine[i].substring(0, 2) == ">>") {
                    ScoresTable[Categorie].PlayerRank = parseInt(OneLine[i].substring(2));
                    famobi.log(_Tx(61) + ScoresTable[Categorie].PlayerRank);
                } else {
                    if (OneLine[i + 2] < 1) {
                        v78 = v103;
                        return;
                    }
                    if (OneLine[i] == NaN) {
                        v78 = v103;
                        return;
                    }
                    if (OneLine[i + 2] == NaN) {
                        v78 = v103;
                        return;
                    }
                    var Posi = i / 3 - 1;
                    ScoresTable[Categorie].Rank[Posi] = Posi + 1;
                    ScoresTable[Categorie].Avatar[Posi] = 1;
                    if (OneLine[i][OneLine[i].length - 3] == "-") {
                        ScoresTable[Categorie].Name[Posi] = OneLine[i].substring(0, OneLine[i].length - 3);
                        ScoresTable[Categorie].Avatar[Posi] = parseInt(OneLine[i].substring(OneLine[i].length, OneLine[i].length - 2));
                    } else {
                        ScoresTable[Categorie].Name[Posi] = OneLine[i];
                    }
                    ScoresTable[Categorie].Score[Posi] = OneLine[i + 2];
                    famobi.log(_Tx(62) + (Posi + 1) + "]: " + ScoresTable[Categorie].Name[Posi] + " " + ScoresTable[Categorie].Score[Posi]);
                    v103++;
                }
            }
            v78 = v103;
        }
    }
    xmlhttp.open("GET", Monetisation_PHPpath + _Tx(63) + Categorie + _Tx(64) + Score_PlayerMax, true);
    xmlhttp.send();
}

function f249(Categorie) {
    var seconds = new Date().getTime() / 1000;
    if (seconds < ScoresTable[Categorie].LastUpdate) return;
    ScoresTable[Categorie].LastUpdate = seconds + 30;
    f275(Categorie);
}

function f59(Categorie) {
    f249(Categorie);
    return ScoresTable[Categorie].PlayerRank;
}

function f135(Pos, Categorie) {
    if (Pos > v102 - 1) return 1;
    f249(Categorie);
    return ScoresTable[Categorie].Avatar[Pos];
}

function f178(Pos, Categorie) {
    if (Pos > v102 - 1) return 0;
    f249(Categorie);
    return ScoresTable[Categorie].Rank[Pos];
}

function f179(Pos, Categorie) {
    if (Pos > v102 - 1) return 0;
    f249(Categorie);
    return ScoresTable[Categorie].Name[Pos];
}

function f153(Pos, Categorie) {
    if (Pos > v102 - 1) return 0;
    f249(Categorie);
    return ScoresTable[Categorie].Score[Pos];
}

function f196(Categorie, Score, Depth) {

    if(window.famobi.hasFeature("standalone") || !window.famobi.hasFeature("leaderboard")) {
        return false;
    }

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        /*
            famobi: allow request status zero if file protocol is used
            (usecase iOS UIWebView)
        */
        var protocolRegex = new RegExp('^file:', 'i');
        var isFileProtocol = protocolRegex.test(xmlhttp.responseURL);

        if (xmlhttp.readyState == 4) {
            if (!(xmlhttp.status == 200 || isFileProtocol && xmlhttp.status === 0)) {
                famobi.log(_Tx(66) + xmlhttp.responseText);
                if (Depth > 0)
                    Submit_Score(Categorie, Score, Depth - 1);
            } else {
                famobi.log(_Tx(67) + xmlhttp.responseText);
                ScoresTable[Categorie].LastUpdate = -1;
            }
        }
    }
    Score = parseInt(Score);
    var ScoreKey = md5(v134 + Score + v201);
    var TempAvatarNumber = "-" + v52;
    if (v52 < 10) TempAvatarNumber = "-0" + v52;
    var UserTempName = v101 + TempAvatarNumber;
    var ULRsrc = Monetisation_PHPpath + _Tx(68) + v201 + '&key=' + v134 + _Tx(69) + UserTempName + _Tx(70) + v52 + _Tx(71) + v77 + _Tx(72) + Score + _Tx(73) + ScoreKey + '&cat=' + Categorie;
    xmlhttp.open("GET", ULRsrc, true);
    xmlhttp.send();
}
var Overlay_OnScreen = 0;

function Overlay_Hide() {
    var OverlayDiv = document.getElementById(_Tx(75));
    OverlayDiv.style.display = "none";
    Overlay_OnScreen = 0;
}

function Overlay_fadeIn(fade) {
    if (fade > 1) fade = 1;
    var DialBoxDiv = document.getElementById(_Tx(76));
    DialBoxDiv.style.opacity = fade;
    DialBoxDiv.style.filter = _Tx(77) + (fade * 100) + ")";
    if (fade < 1) setTimeout(function() {
        Overlay_fadeIn(fade + 0.1);
    }, 1000 / 40);
}

function Overlay_Show(path) {
    document.getElementById(_Tx(78)).src = path;
    Overlay_fadeIn(0);
    var OverlayDiv = document.getElementById("overlay");
    OverlayDiv.style.display = "block";
    Overlay_OnScreen = 1;
}
var gamepads = [];
var v242 = 0;
var v166 = 0;
var v167 = 0;
var GamePad_RIGHT = 0;
var v29 = 0;
var v19 = 0;
var v54 = 0;
var v55 = 0;
var v56 = 0;
var v57 = 0;
var v20 = 0;
var v21 = 0;
var GamePad_RIGHT_STICK_X = 0;
var GamePad_RIGHT_STICK_Y = 0;

function f78() {
    gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
}

function f114() {
    famobi.log(_Tx(79));
    window.addEventListener(_Tx(80), function(e) {
        f78();
    }, false);
    window.addEventListener(_Tx(81), function(e) {
        f78();
    }, false);
    f78();
    famobi.log(_Tx(82) + gamepads.length + _Tx(83));
    for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i])
            famobi.log(_Tx(84) + gamepads[i].id);
    }
}

function f180(b) {
    if (typeof(b) == _Tx(85)) {
        return b.pressed;
    }
    return b == 1.0;
}

function f79() {
    if (gamepads.length == 0) return;
    f78();
    v242 = 0;
    v166 = 0;
    v167 = 0;
    GamePad_RIGHT = 0;
    v29 = 0;
    v19 = 0;
    v54 = 0;
    v55 = 0;
    v56 = 0;
    v57 = 0;
    v20 *= 0.5;
    v21 *= 0.5;
    GamePad_RIGHT_STICK_X *= 0.5;
    GamePad_RIGHT_STICK_Y *= 0.5;
    for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
            var gp = gamepads[i];
            if (f180(gp.buttons[0])) {
                v54 = 1;
            }
            if (f180(gp.buttons[1])) {
                v55 = 1;
            }
            if (f180(gp.buttons[2])) {
                v56 = 1;
            }
            if (f180(gp.buttons[3])) {
                v57 = 1;
            }
            if (f180(gp.buttons[8])) {
                v29 = 1;
            }
            if (f180(gp.buttons[9])) {
                v19 = 1;
            }
            if (f180(gp.buttons[14])) {
                v167 = 1;
            }
            if (f180(gp.buttons[15])) {
                GamePad_RIGHT = 1;
            }
            if (f180(gp.buttons[12])) {
                v242 = 1;
            }
            if (f180(gp.buttons[13])) {
                v166 = 1;
            }
            if (gp.axes[0] < -0.5) v167 = 1;
            if (gp.axes[0] > 0.5) GamePad_RIGHT = 1;
            if (Math.abs(gp.axes[0]) > 0.1) v20 = gp.axes[0];
            if (Math.abs(gp.axes[1]) > 0.1) v21 = gp.axes[1];
            if (Math.abs(gp.axes[2]) > 0.1) GamePad_RIGHT_STICK_X = gp.axes[2];
            if (Math.abs(gp.axes[3]) > 0.1) GamePad_RIGHT_STICK_Y = gp.axes[3];
        }
    }
}
var WebGL_Maxv262 = 50;
var v262 = new Array();
var v136 = false;
var v104 = false;

function f136() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.s_sx = 0;
    this.s_sy = 0;
    this.s_sz = 0;
    this.size = 0;
    this.s_size = 0;
    this.Rotation = 0;
    this.s_Rotation = 0;
    this.TextureID = 0;
    this.Gravity = 0;
    this.GroundBounce = 0;
    this.Alpha = 1.0;
    this.AlphaFade = 0.0;
    this.Forced = false;
    this.IsFlat = false;
}

function f91(true_false) {
    v136 = true_false;
}
var v243;

function f115(true_false) {
    v243 = true_false;
}

function f155() {
    /*
    for (var i=0;i<WebGL_Maxv262;i++)
    {
    v262.push();
    v262[i]=new f136();
    }
    */
}
var v202;
var TempGroundBounce;

function f60(Gravity, GroundBounce) {
    v202 = Gravity;
    TempGroundBounce = GroundBounce;
}
var v263;
var v263Fade;

function f92(Alpha, AlphaFade) {
    v263 = Alpha;
    v263Fade = AlphaFade;
}
var TempTextureID;

function f61(TextureID) {
    TempTextureID = TextureID;
}
var v280;
var Temps_size;
var TempRotation;
var Temps_Rotation;

function f62(size, s_size, Rotation, s_Rotation) {
    v280 = size;
    Temps_size = s_size;
    TempRotation = Rotation;
    Temps_Rotation = s_Rotation;
}
var v316;
var Tempy;
var Tempz;
var Tempsx;
var Tempsy;
var Tempsz;

function f45(x, y, z, sx, sy, sz) {
    v316 = x;
    Tempy = y;
    Tempz = z;
    Tempsx = sx;
    Tempsy = sy;
    Tempsz = sz;
}

function f80(Isforced) {
    v104 = Isforced;
}

function f199() {
    v262.push();
    var ID = v262.length;
    v262[ID] = new f136();
    v262[ID].x = v316;
    v262[ID].y = Tempy;
    v262[ID].z = Tempz;
    v262[ID].sx = Tempsx * 0.01;
    v262[ID].sy = Tempsy * 0.01;
    v262[ID].sz = Tempsz * 0.01;
    v262[ID].Gravity = v202 * 0.01;
    v262[ID].GroundBounce = TempGroundBounce;
    v262[ID].Alpha = v263;
    v262[ID].AlphaFade = v263Fade * 0.01;
    v262[ID].TextureID = TempTextureID;
    v262[ID].size = v280 * 0.5;
    v262[ID].s_size = Temps_size * 0.1;
    v262[ID].Rotation = TempRotation;
    v262[ID].s_Rotation = Temps_Rotation * 0.1;
    v262[ID].Forced = v104;
    v262[ID].IsFlat = v243;
    v243 = false;
    v104 = false;
}

function f116(Shift) {
    for (var i = 0; i < v262.length; i++) {
        v262[i].x += Shift;
    }
}
var v22 = true;

function f156() {
    gl.depthMask(false);
    f228(2);
    var PatricleToKill = -1;
    for (var i = 0; i < v262.length; i++) {
        f181(1.0, 1.0, 1.0, v262[i].Alpha);
        f203();
        f231(v262[i].x, v262[i].y, v262[i].z);
        if (v262[i].IsFlat == false)
            if (v136 == false) {
                var Angle = f112(v262[i].x, v262[i].z, v205, v207);
                f296(-Angle + 90, 0, 1, 0);
                var Dist = Math.sqrt(Math.pow((v262[i].x - v205), 2) + Math.pow((v262[i].z - v207), 2));
                Angle = f112(0, v262[i].y, Dist, v206);
                f296(Angle, 1, 0, 0);
            }
        if (v262[i].IsFlat == true) {
            f296(90, 1, 0, 0);
        }
        f296(v262[i].Rotation, 0, 0, 1);
        f138(v262[i].TextureID, +v262[i].size, -v262[i].size, -v262[i].size, +v262[i].size);
        f230();
        if (v22 == true) {
            v262[i].size += v262[i].s_size;
            v262[i].Alpha -= v262[i].AlphaFade * v260;
            if (v262[i].Alpha < 0 || v262[i].size < 1) PatricleToKill = i;
            v262[i].Rotation += v262[i].s_Rotation * v260;
            v262[i].x += v262[i].sx * v260;
            v262[i].y += v262[i].sy * v260;
            v262[i].z += v262[i].sz * v260;
            v262[i].sy -= v262[i].Gravity * v260;
            if (v262[i].GroundBounce > 0 && v262[i].y < v262[i].size * 0.5) {
                v262[i].y = v262[i].size * 0.5;
                v262[i].sy = Math.abs(v262[i].sy) * v262[i].GroundBounce;
            }
        }
    }
    gl.depthMask(true);
    if (PatricleToKill != -1) {
        v262.splice(PatricleToKill, 1);
    }
    PatricleToKill = -1;
}
var shaderProgram = new Array;
var v105 = new Array;
var v168 = new Array;
var v244 = new Array;
var v245 = new Array;
var v169 = 0;
var v138 = 0.0;
var v139 = 1.0;
var v140 = 0.0;

function f7(X, Y, Z) {
    v138 = X;
    v139 = Y;
    v140 = Z;
}

function f181(R, G, B, A) {
    gl.uniform4f(v105[v141].ColorsUniform, R, G, B, A);
}

function f13() {
    if (v105[v141].v296Uniform != null)
        gl.uniformMatrix4fv(v105[v141].v296Uniform, false, v296);
    if (v105[v141].v281Uniform != null)
        gl.uniformMatrix4fv(v105[v141].v281Uniform, false, v281);
    if (v105[v141].cMatrixUniform != null)
        gl.uniformMatrix4fv(v105[v141].cMatrixUniform, false, v172);
    if (v105[v141].Texture0_Uniform != null)
        gl.uniform1i(v105[v141].Texture0_Uniform, 0);
    if (v105[v141].Texture1_Uniform != null)
        gl.uniform1i(v105[v141].Texture1_Uniform, 1);
    if (v105[v141].Texture2_Uniform != null)
        gl.uniform1i(v105[v141].Texture2_Uniform, 2);
    if (v105[v141].lightUniform != null)
        gl.uniform3f(v105[v141].lightUniform, v138, v139, v140);
    if (v105[v141].ShadowUniform != null)
        gl.uniformMatrix4fv(v105[v141].ShadowUniform, false, v175);
    if (v105[v141].nMatrixUniform != null) {
        mat3.normalFromMat4(v174, v281);
        gl.uniformMatrix3fv(v105[v141].nMatrixUniform, false, v174);
    }
}
var v141 = -1

function f228(id) {
    if (v168[id] != 1) {
        famobi.log(_Tx(87) + id + "]");
        return;
    }
    gl.useProgram(shaderProgram[id]);
    v141 = id;
    gl.enableVertexAttribArray(v105[id].vertexPositionAttribute);
    if (v105[id].vertexNormalAttribute != -1) {
        gl.enableVertexAttribArray(v105[id].vertexNormalAttribute);
    }
    if (v105[id].textureCoordAttribute != -1) {
        if (id != 3)
            gl.enableVertexAttribArray(v105[id].textureCoordAttribute);
        else
            gl.disableVertexAttribArray(v105[id].textureCoordAttribute);
    }
}

function f117(id) {
    v105[id].vertexPositionAttribute = gl.getAttribLocation(shaderProgram[id], _Tx(88));
    v105[id].vertexNormalAttribute = gl.getAttribLocation(shaderProgram[id], _Tx(89));
    v105[id].textureCoordAttribute = gl.getAttribLocation(shaderProgram[id], _Tx(90));
    v105[id].v296Uniform = gl.getUniformLocation(shaderProgram[id], _Tx(91));
    v105[id].v281Uniform = gl.getUniformLocation(shaderProgram[id], _Tx(92));
    v105[id].nMatrixUniform = gl.getUniformLocation(shaderProgram[id], _Tx(93));
    v105[id].cMatrixUniform = gl.getUniformLocation(shaderProgram[id], _Tx(94));
    v105[id].Texture0_Uniform = gl.getUniformLocation(shaderProgram[id], _Tx(95));
    v105[id].Texture1_Uniform = gl.getUniformLocation(shaderProgram[id], _Tx(96));
    v105[id].Texture2_Uniform = gl.getUniformLocation(shaderProgram[id], _Tx(97));
    v105[id].BonesPositionUniform = gl.getUniformLocation(shaderProgram[id], _Tx(98));
    v105[id].BonesLookAtUniform = gl.getUniformLocation(shaderProgram[id], _Tx(99));
    v105[id].ColorsUniform = gl.getUniformLocation(shaderProgram[id], _Tx(100));
    v105[id].lightUniform = gl.getUniformLocation(shaderProgram[id], _Tx(101));
    v105[id].ShadowUniform = gl.getUniformLocation(shaderProgram[id], _Tx(102));
    v105[id].v262Data = gl.getUniformLocation(shaderProgram[id], _Tx(103));
}

function f93(id) {
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, v245[id]);
    gl.compileShader(vertShader);
    if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
        //alert(_Tx(105)+id+"]"+gl.getShaderInfoLog(vertShader));
    }
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, v244[id]);
    gl.compileShader(fragShader);
    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        //alert(_Tx(106)+id+"]"+gl.getShaderInfoLog(fragShader));
    }
    shaderProgram[id] = gl.createProgram();
    gl.attachShader(shaderProgram[id], vertShader);
    gl.attachShader(shaderProgram[id], fragShader);
    gl.linkProgram(shaderProgram[id]);
    if (!gl.getProgramParameter(shaderProgram[id], gl.LINK_STATUS)) {
        return;
    }
    gl.useProgram(shaderProgram[id]);
    f117(id);
    v168[id] = 1;
    v169--;
    gl.useProgram(shaderProgram[1]);
}

function f157(id, name) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            v245[id] = "\n" + xmlhttp.responseText + "\n";
            v168[id] -= 1;
            f158(id, name);
        }
    }
    xmlhttp.open("GET", _Tx(108) + name + ".vsh" + v222, true);
    xmlhttp.send();
}

function f158(id, name) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            v244[id] = "\n" + xmlhttp.responseText + "\n";
            v168[id] -= 1;
            f93(id);
        }
    }
    xmlhttp.open("GET", "datas/shaders/" + name + ".fsh" + v222, true);
    xmlhttp.send();
}

function f229(id, name) {
    v169++;
    v168[id] = 0;
    f157(id, name);
}

function f36() {
    this.vertexPositionAttribute = 0;
    this.vertexNormalAttribute = 0;
    this.textureCoordAttribute = 0;
    this.v296Uniform = 0;
    this.cMatrixUniform = 0;
    this.v281Uniform = 0;
    this.nMatrixUniform = 0;
    this.Texture0_Uniform = 0;
    this.Texture1_Uniform = 0;
    this.Texture2_Uniform = 0;
    this.ColorsUniform = 0;
    this.lightUniform = 0;
    this.ShadowUniform = 0;
    this.v262Data = 0;
    this.BonesPositionUniform = 0;
    this.BonesLookAtUniform = 0;
}

function f200() {
    for (var i = 0; i < 30; i++) {
        shaderProgram.push;
        v168.push;
        v168[i] = 0;
        v105.push;
        v105[i] = new f36();
        v244.push;
        v245.push
    }
    f229(1, _Tx(109));
    f229(2, _Tx(110));
    f229(3, _Tx(111));
    f229(4, _Tx(112));
    f229(5, _Tx(113));
    f229(6, _Tx(114));
    f229(7, _Tx(115));
    f229(8, _Tx(116));
    f229(9, _Tx(117));
    f229(10, "water");
    f229(11, _Tx(118));
    f229(12, _Tx(119));
    f229(13, "flag");
    f229(14, _Tx(120));
    f229(15, _Tx(121));
    f229(16, _Tx(122));
    f229(17, _Tx(123));
    f229(18, _Tx(124));
    f229(19, _Tx(125));
    f229(20, _Tx(126));
}
var GLTexture = new Array();
var GLTexture_Name = new Array();
var MaxGLtexture = 200;
var v4;
var SpriteVertexTextureCoordBuffer;
var v6;
var v171 = new Array();
var v107 = new Array();
var DynaTex_Texture = new Array();

function f81() {
    var svertices = [-0.5, 0.5, -0.2,
        0.5, 0.5, -0.2,
        0.5, -0.5, -0.2, -0.5, -0.5, -0.2,
    ];
    var stextureCoords = [
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];
    var sVertexIndices = [0, 1, 2, 0, 2, 3];
    v4 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v4);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(svertices), gl.STATIC_DRAW);
    v4.itemSize = 3;
    v4.numItems = 4;
    SpriteVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, SpriteVertexTextureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(stextureCoords), gl.STATIC_DRAW);
    SpriteVertexTextureCoordBuffer.itemSize = 2;
    SpriteVertexTextureCoordBuffer.numItems = 4;
    v6 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v6);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sVertexIndices), gl.STATIC_DRAW);
    v6.itemSize = 1;
    v6.numItems = 6;
    famobi.log(_Tx(127));
}

function f63(texture) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    if (f137(texture.image.width, texture.image.height) == 1) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.generateMipmap(gl.TEXTURE_2D);
    } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
    DataToDownload--;
    v73--;
}

function f159(Var) {
    if (Var > 4096) return 4096;
    if (Var > 2048) return 4096;
    if (Var > 1024) return 2048;
    if (Var > 512) return 1024;
    if (Var > 256) return 512;
    if (Var > 128) return 256;
    if (Var > 64) return 128;
    if (Var > 32) return 64;
    if (Var > 16) return 32;
    return 16;
}

function f137(x, y) {
    if (x != 16 && x != 32 && x != 64 && x != 128 && x != 256 && x != 512 && x != 1024 && x != 2048 && x != 4096) return 0;
    if (y != 16 && y != 32 && y != 64 && y != 128 && y != 256 && y != 512 && y != 1024 && y != 2048 && y != 4096) return 0;
    return 1;
}
/*
function f3(x,y,TextName, ThisTexture)
{
famobi.log (_Tx(129)+i+"] '"+TextName+"' "+x+"x"+y);
x=f159(x); y=f159(y);
var dec_x=(x-ThisTexture.image.width)*0.5;
var dec_y=(y-ThisTexture.image.height)*0.5;
var width=ThisTexture.image.width;
var height=ThisTexture.image.height;
famobi.log (_Tx(130)+x+"x"+y);
var canvas=document.createElement(_Tx(131));
canvas.width=x;
canvas.height=y;
var ctx=canvas.getContext('2d');
ctx.drawImage(ThisTexture.image,dec_x,dec_y);
ThisTexture.image.style.width=width;
ThisTexture.image.style.height=height;
ThisTexture.image.src=canvas.toDataURL();
}
*/
function f160(ID, TextPath) {
    DataToDownload++;
    v73++;
    var TextName = _Tx(132) + TextPath + v222;
    if (TextPath.search("data:") != -1) TextName = TextPath;
    if (TextPath.search("http") != -1) TextName = TextPath;
    var i;
    if (ID != -1) {
        GLTexture_Name[ID] = TextName;
        for (i = 0; i < MaxGLtexture; i++) {
            if (GLTexture_Name[i] == TextName && i != ID) {
                famobi.log(_Tx(133) + i + "] '" + TextName + "'");
                DataToDownload--;
                v73--;
                return GLTexture[i];
            }
        }
    }
    famobi.log(_Tx(134) + ID + "] '" + TextName + "'");
    var ThisTexture = gl.createTexture();
    ThisTexture.image = new Image();
    ThisTexture.image.onload = function() {
        var x = ThisTexture.image.width;
        var y = ThisTexture.image.height;
        f63(ThisTexture)
    }
    ThisTexture.image.src = TextName;
    return ThisTexture;
}

function f182() {
    var i;
    for (i; i < MaxGLtexture; i++) {
        GLTexture.push;
        GLTexture_Name.push;
    }
}
var PrevTexture = -1;

function f201(ID) {
    if (PrevTexture == ID) return;
    PrevTexture = ID;
    if (ID == -1) return;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, GLTexture[ID]);
}

function f161(ID) {
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, GLTexture[ID]);
    gl.activeTexture(gl.TEXTURE0);
}

function f183(xa, ya, xb, yb) {
    f203();
    f231(xa, ya, 0.0);
    f299(xb - xa, yb - ya, 1);
    f231(0.5, 0.5, 0.0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v4);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v4.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v6);
    f13();
    gl.drawElements(gl.TRIANGLES, v6.numItems, gl.UNSIGNED_SHORT, 0);
    f230();
    v99 += 2;
}

function f138(ID, xa, ya, xb, yb) {
    if (ID != -1) f201(ID);
    f203();
    f231(xa, ya, 0.0);
    f299(xb - xa, yb - ya, 1);
    f231(0.5, 0.5, 0.0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v4);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v4.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, SpriteVertexTextureCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, SpriteVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v6);
    f13(1);
    gl.drawElements(gl.TRIANGLES, v6.numItems, gl.UNSIGNED_SHORT, 0);
    f230();
    v99 += 2;
}

function f202(ID) {
    f201(ID);
    f203();
    f299(GLTexture[ID].image.width, GLTexture[ID].image.height, 1);
    gl.bindBuffer(gl.ARRAY_BUFFER, v4);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v4.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, SpriteVertexTextureCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, SpriteVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v6);
    f13();
    gl.drawElements(gl.TRIANGLES, v6.numItems, gl.UNSIGNED_SHORT, 0);
    f230();
    v99 += 2;
}

function f276(path) {
    for (var i = 0; i < v171.length; i++) {
        if (v171[i] == path) return i;
    }
    var i = v171.length;
    v171.push();
    DynaTex_Texture.push();
    v107.push();
    v171[i] = path;
    v107[i] = 0;
    var ThisTexture = gl.createTexture();
    ThisTexture.image = new Image();
    ThisTexture.image.crossOrigin = _Tx(135);
    ThisTexture.image.onload = function() {
        var x = ThisTexture.image.width;
        var y = ThisTexture.image.height;
        f63(ThisTexture)
        DynaTex_Texture[i] = ThisTexture;
        v107[i] = 1;
        DataToDownload = 0;
        v73 = 0;
    }
    ThisTexture.image.src = path;
    return i;
}

function f25(Path) {
    var TexID = f276(Path);
    if (v107[TexID] == 0) return 0;
    return DynaTex_Texture[TexID].image.width;
}

function f20(Path) {
    var TexID = f276(Path);
    if (v107[TexID] == 0) return 0;
    return DynaTex_Texture[TexID].image.height;
}

function f8(Path) {
    var TexID = f276(Path);
    if (v107[TexID] == 0) return 0;
    return parseInt(DynaTex_Texture[TexID].image.style.width);
}

function f4(Path) {
    var TexID = f276(Path);
    if (v107[TexID] == 0) return 0;
    return parseInt(DynaTex_Texture[TexID].image.style.height);
}

function f37(Path, TempTextureID) {
    var TexID = f276(Path);
    if (v107[TexID] == 0) {
        f201(TempTextureID);
        return;
    }
    PrevTexture = -1;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, DynaTex_Texture[TexID]);
}

function f38(Path, TempTextureID) {
    var TexID = f276(Path);
    if (v107[TexID] == 0) {
        f203();
        f299(0.5, 0.5, 1);
        f296(Math.random() * 360, 0, 0, 1);
        if (TempTextureID > 0) f202(TempTextureID);
        f230();
        return;
    }
    PrevTexture = -1;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, DynaTex_Texture[TexID]);
    f203();
    f299(DynaTex_Texture[TexID].image.width, DynaTex_Texture[TexID].image.height, 1);
    gl.bindBuffer(gl.ARRAY_BUFFER, v4);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v4.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, SpriteVertexTextureCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, SpriteVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v6);
    f13();
    gl.drawElements(gl.TRIANGLES, v6.numItems, gl.UNSIGNED_SHORT, 0);
    f230();
    v99 += 2;
}
var v142 = [];
var v296 = mat4.create();
var v281 = mat4.create();
var v172 = mat4.create();
var v173 = mat4.create();
var v174 = mat3.create();
var v175 = mat4.create();
var v47 = mat3.create();
var v246 = mat4.create();

function f139(x, y, z, a) {
    a = a * 3.14159265359 / 180.0;
    var s = Math.sin(a);
    var c = Math.cos(a);
    var t = 1.0 - c;
    var tx = t * x;
    var ty = t * y;
    var tz = t * z;
    var sz = s * z;
    var sy = s * y;
    var sx = s * x;
    var matrix = [tx * x + c, tx * y + sz, tx * z - sy, 0, tx * y - sz, ty * y + c, ty * z + sx, 0, tx * z + sy, ty * z - sx, tz * z + c, 0, 0, 0, 0, 1];
    return matrix;
}

function f203() {
    var copy = mat4.create();
    mat4.copy(copy, v281);
    v142.push(copy);
}

function f230() {
    if (v142.length == 0) {
        throw _Tx(136);
    }
    v281 = v142.pop();
}
var v23;

function f64(x, y, z) {
    LightX = x;
    LightY = y;
    LightZ = z;
}

function f162() {
    var lightpos = [50, 0.1, 50, 1];
    lightpos[0] = LightX;
    lightpos[1] = LightY;
    lightpos[2] = LightZ;
    var dot;
    var groundplane = [0, 1, 0, 0];
    var shadowMat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    dot = groundplane[0] * lightpos[0] + groundplane[1] * lightpos[1] + groundplane[2] * lightpos[2];
    shadowMat[0] = dot - lightpos[0] * groundplane[0];
    shadowMat[4] = -lightpos[0] * groundplane[1];
    shadowMat[8] = -lightpos[0] * groundplane[2];
    shadowMat[12] = -lightpos[0] * groundplane[3];
    shadowMat[1] = -lightpos[1] * groundplane[0];
    shadowMat[5] = dot - lightpos[1] * groundplane[1];
    shadowMat[9] = -lightpos[1] * groundplane[2];
    shadowMat[13] = -lightpos[1] * groundplane[3] + 1000;
    shadowMat[2] = -lightpos[2] * groundplane[0];
    shadowMat[6] = -lightpos[2] * groundplane[1];
    shadowMat[10] = dot - lightpos[2] * groundplane[2];
    shadowMat[14] = -lightpos[2] * groundplane[3];
    shadowMat[3] = -lightpos[3] * groundplane[0];
    shadowMat[7] = -lightpos[3] * groundplane[1];
    shadowMat[11] = -lightpos[3] * groundplane[2];
    shadowMat[15] = dot - lightpos[3] * groundplane[3];
    mat4.multiply(v281, v281, shadowMat);
}

function f295(degrees) {
    return degrees * Math.PI / 180;
}

function f231(x, y, z) {
    mat4.translate(v281, v281, [x, y, z]);
}

function f299(x, y, z) {
    mat4.scale(v281, v281, [x, y, z]);
}

function f296(Angle, x, y, z) {
    mat4.rotate(v281, v281, f295(Angle), [x, y, z]);
}

function f232(Angle, x, y, z) {
    mat4.rotate(v281, v281, Angle, [x, y, z]);
}
var WebGL_MaxPersPective = 6000;
var WebGL_MinPersPective = 20;

function f82(fov) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    mat4.perspective(v296, f295(fov), v221 / v183, WebGL_MinPersPective, WebGL_MaxPersPective);
    mat4.identity(v281);
    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
}

function f11(fov, Width, Height) {
    gl.viewport(0, 0, Width, Height);
    mat4.perspective(v296, f295(fov), Width / Height, WebGL_MinPersPective, WebGL_MaxPersPective);
    mat4.identity(v281);
    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
}
var v204 = 300;
var v176 = 700;

function f204() {
    v204 = v221 * v176 / v183;
    if (v204 < WebGL_MinScaledSize) v204 = WebGL_MinScaledSize;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    mat4.ortho(v296, 0, v204, v176, 0, 0.1, 800.0)
    mat4.identity(v281);
    mat4.identity(v172);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
}
var v205;
var v206;
var v207;
var v108;
var v109;
var v110;
var v177;

function f250(EyeX, EyeY, EyeZ, CenterX, CenterY, CenterZ, UpX, UpY, UpZ) {
    v205 = EyeX;
    v206 = EyeY;
    v207 = EyeZ;
    v108 = CenterX;
    v109 = CenterY;
    v110 = CenterZ;
    mat4.lookAt(v172, [EyeX, EyeY, EyeZ], [CenterX, CenterY, CenterZ], [UpX, UpY, UpZ]);
    mat4.multiply(v173, v172, v281);
    v177 = f177(EyeX, EyeZ, CenterX, CenterZ);
}

function f118(EyeX, EyeY, EyeZ, CenterX, CenterY, CenterZ, UpX, UpY, UpZ) {
    v205 = EyeX;
    v206 = EyeY;
    v207 = EyeZ;
    mat4.lookAt(v172, [EyeX, EyeY, EyeZ], [CenterX, CenterY, CenterZ], [UpX, UpY, UpZ]);
}
var v264 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
var A = 0;
var B = 1;
var C = 2;
var D = 3;
var RIGHT = 0;
var LEFT = 1;
var v305 = 2;
var TOP = 3;
var BACK = 4;
var v318 = 5;

function f163(frustum, side) {
    var magnitude = Math.sqrt(frustum[side][A] * frustum[side][A] +
        frustum[side][B] * frustum[side][B] +
        frustum[side][C] * frustum[side][C]);
    frustum[side][A] /= magnitude;
    frustum[side][B] /= magnitude;
    frustum[side][C] /= magnitude;
    frustum[side][D] /= magnitude;
}

function f164() {
    var clip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    clip[0] = v173[0] * v296[0] + v173[1] * v296[4] + v173[2] * v296[8] + v173[3] * v296[12];
    clip[1] = v173[0] * v296[1] + v173[1] * v296[5] + v173[2] * v296[9] + v173[3] * v296[13];
    clip[2] = v173[0] * v296[2] + v173[1] * v296[6] + v173[2] * v296[10] + v173[3] * v296[14];
    clip[3] = v173[0] * v296[3] + v173[1] * v296[7] + v173[2] * v296[11] + v173[3] * v296[15];
    clip[4] = v173[4] * v296[0] + v173[5] * v296[4] + v173[6] * v296[8] + v173[7] * v296[12];
    clip[5] = v173[4] * v296[1] + v173[5] * v296[5] + v173[6] * v296[9] + v173[7] * v296[13];
    clip[6] = v173[4] * v296[2] + v173[5] * v296[6] + v173[6] * v296[10] + v173[7] * v296[14];
    clip[7] = v173[4] * v296[3] + v173[5] * v296[7] + v173[6] * v296[11] + v173[7] * v296[15];
    clip[8] = v173[8] * v296[0] + v173[9] * v296[4] + v173[10] * v296[8] + v173[11] * v296[12];
    clip[9] = v173[8] * v296[1] + v173[9] * v296[5] + v173[10] * v296[9] + v173[11] * v296[13];
    clip[10] = v173[8] * v296[2] + v173[9] * v296[6] + v173[10] * v296[10] + v173[11] * v296[14];
    clip[11] = v173[8] * v296[3] + v173[9] * v296[7] + v173[10] * v296[11] + v173[11] * v296[15];
    clip[12] = v173[12] * v296[0] + v173[13] * v296[4] + v173[14] * v296[8] + v173[15] * v296[12];
    clip[13] = v173[12] * v296[1] + v173[13] * v296[5] + v173[14] * v296[9] + v173[15] * v296[13];
    clip[14] = v173[12] * v296[2] + v173[13] * v296[6] + v173[14] * v296[10] + v173[15] * v296[14];
    clip[15] = v173[12] * v296[3] + v173[13] * v296[7] + v173[14] * v296[11] + v173[15] * v296[15];
    v264[RIGHT][A] = clip[3] - clip[0];
    v264[RIGHT][B] = clip[7] - clip[4];
    v264[RIGHT][C] = clip[11] - clip[8];
    v264[RIGHT][D] = clip[15] - clip[12];
    f163(v264, RIGHT);
    v264[LEFT][A] = clip[3] + clip[0];
    v264[LEFT][B] = clip[7] + clip[4];
    v264[LEFT][C] = clip[11] + clip[8];
    v264[LEFT][D] = clip[15] + clip[12];
    f163(v264, LEFT);
    v264[v305][A] = clip[3] + clip[1];
    v264[v305][B] = clip[7] + clip[5];
    v264[v305][C] = clip[11] + clip[9];
    v264[v305][D] = clip[15] + clip[13];
    f163(v264, v305);
    v264[TOP][A] = clip[3] - clip[1];
    v264[TOP][B] = clip[7] - clip[5];
    v264[TOP][C] = clip[11] - clip[9];
    v264[TOP][D] = clip[15] - clip[13];
    f163(v264, TOP);
    v264[BACK][A] = clip[3] - clip[2];
    v264[BACK][B] = clip[7] - clip[6];
    v264[BACK][C] = clip[11] - clip[10];
    v264[BACK][D] = clip[15] - clip[14];
    f163(v264, BACK);
    v264[v318][A] = clip[3] + clip[2];
    v264[v318][B] = clip[7] + clip[6];
    v264[v318][C] = clip[11] + clip[10];
    v264[v318][D] = clip[15] + clip[14];
    f163(v264, v318);
}

function f119(xa, ya, za, xb, yb, zb) {
    for (var i = 0; i < 6; i++) {
        if (v264[i][A] * (xa) + v264[i][B] * (yb) + v264[i][C] * (za) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xb) + v264[i][B] * (yb) + v264[i][C] * (za) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xa) + v264[i][B] * (ya) + v264[i][C] * (za) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xb) + v264[i][B] * (ya) + v264[i][C] * (za) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xa) + v264[i][B] * (yb) + v264[i][C] * (zb) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xb) + v264[i][B] * (yb) + v264[i][C] * (zb) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xa) + v264[i][B] * (ya) + v264[i][C] * (zb) + v264[i][D] > 0) continue;
        if (v264[i][A] * (xb) + v264[i][B] * (ya) + v264[i][C] * (zb) + v264[i][D] > 0) continue;
        return 0;
    }
    return 1;
}

function f65(x, y, z, radius) {
    for (var i = 0; i < 6; i++) {
        if (v264[i][A] * x + v264[i][B] * y + v264[i][C] * z + v264[i][D] <= -radius) {
            return 0;
        }
    }
    return 1;
}
var v208 = 0;
var v209 = 0;

function f233() {
    mat4.multiply(v246, v173, v281);
    var IN = [0, 0, 0, 1];
    var IN_B = [0, 0, 0, 0];
    IN_B[0] = IN[0] * v246[0] + IN[1] * v246[4] + IN[2] * v246[8] + IN[3] * v246[12];
    IN_B[1] = IN[0] * v246[1] + IN[1] * v246[5] + IN[2] * v246[9] + IN[3] * v246[13];
    IN_B[2] = IN[0] * v246[2] + IN[1] * v246[6] + IN[2] * v246[10] + IN[3] * v246[14];
    IN_B[3] = IN[0] * v246[3] + IN[1] * v246[7] + IN[2] * v246[11] + IN[3] * v246[15];
    IN[0] = IN_B[0] * v296[0] + IN_B[1] * v296[4] + IN_B[2] * v296[8] + IN_B[3] * v296[12];
    IN[1] = IN_B[0] * v296[1] + IN_B[1] * v296[5] + IN_B[2] * v296[9] + IN_B[3] * v296[13];
    IN[2] = IN_B[0] * v296[2] + IN_B[1] * v296[6] + IN_B[2] * v296[10] + IN_B[3] * v296[14];
    IN[3] = IN_B[0] * v296[3] + IN_B[1] * v296[7] + IN_B[2] * v296[11] + IN_B[3] * v296[15];
    if (IN[3] == 0.0) {
        v208 = v183 * 0.5;
        v209 = -v221;
        return 0;
    }
    IN[0] /= IN[3];
    IN[1] /= IN[3];
    IN[2] /= IN[3];
    if (IN[3] < 0.0) {
        IN[0] *= 20000;
        IN[1] *= 20000;
    }
    IN[0] = IN[0] * 0.5 + 0.5;
    IN[1] = IN[1] * 0.5 + 0.5;
    IN[2] = IN[2] * 0.5 + 0.5;
    /* Map x,y to viewport */
    IN[0] = IN[0] * v221;
    IN[1] = IN[1] * v183;
    if (IN[3] > 0.0) {
        v208 = IN[0];
        v209 = v183 - IN[1];
    } else {
        v208 = v221 - IN[0];
        v209 = IN[1];
    }
    return 1;
}
var v265 = new Array();
var v247 = 200;

function f205() {
    this.Exist = 0;
    this.xa = 0;
    this.ya = 0;
    this.xb = 0;
    this.yb = 0;
    this.width = 0;
    this.height = 0;
    this.centerX = 0;
    this.centerY = 0;
    this.HPx = 0;
    this.HPy = 0;
    this.textureID = 0;
    this.VertexSpritePositionBuffer;
    this.TextureSpriteCoordBuffer;
    this.VertexSpriteIndexBuffer;
}

function f66(id) {
    v265[id].VertexSpritePositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v265[id].VertexSpritePositionBuffer);
    vertices =
        [-v265[id].centerX, v265[id].centerY, -0.25,
            v265[id].centerX, v265[id].centerY, -0.25,
            v265[id].centerX, -v265[id].centerY, -0.25, -v265[id].centerX, -v265[id].centerY, -0.25,
        ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    v265[id].VertexSpritePositionBuffer.itemSize = 3;
    v265[id].VertexSpritePositionBuffer.numItems = 4;
    var TextureWidth = GLTexture[v265[id].textureID].image.width;
    var TextureHeight = GLTexture[v265[id].textureID].image.height;
    var uvStart_X = v265[id].xa / TextureWidth;
    var uvStart_Y = 1.0 - v265[id].ya / TextureHeight;
    var uvEnd_X = v265[id].xb / TextureWidth;
    var uvEnd_Y = 1.0 - v265[id].yb / TextureHeight;
    v265[id].VertexTextureSpriteCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v265[id].VertexTextureSpriteCoordBuffer);
    var textureCoords = [
        uvStart_X, uvEnd_Y, uvEnd_X, uvEnd_Y, uvEnd_X, uvStart_Y, uvStart_X, uvStart_Y,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    v265[id].VertexTextureSpriteCoordBuffer.itemSize = 2;
    v265[id].VertexTextureSpriteCoordBuffer.numItems = 4;
    v265[id].VertexSpriteIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v265[id].VertexSpriteIndexBuffer);
    var sVertexIndices = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sVertexIndices), gl.STATIC_DRAW);
    v265[id].VertexSpriteIndexBuffer.itemSize = 1;
    v265[id].VertexSpriteIndexBuffer.numItems = 6;
}

function f251(id, textureID, xa, ya, xb, yb) {
    v265[id].xa = xa;
    v265[id].ya = ya;
    v265[id].xb = xb;
    v265[id].yb = yb;
    v265[id].textureID = textureID;
    v265[id].width = xb - xa;
    v265[id].height = yb - ya;
    v265[id].centerX = v265[id].width * 0.5;
    v265[id].centerY = v265[id].height * 0.5;
    f66(id);
    v265[id].Exist = 1;
}

function f94(id, x, y) {
    v265[id].HPx = x;
    v265[id].HPy = y;
}

function f165(id, xa, ya, xb, yb) {
    if (id > -1) {} else {
        famobi.log(_Tx(137) + id + " " + x + " " + y + " " + s);
        return;
    }
    if (v265[id].Exist != 1) return;
    f201(v265[id].textureID);
    f203();
    f231(xa, ya, 0.0);
    f299(xb - xa, yb - ya, 1);
    f231(0.5, 0.5, 0.0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v4);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v265[id].VertexSpritePositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v265[id].VertexTextureSpriteCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, v265[id].VertexTextureSpriteCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v265[id].VertexSpriteIndexBuffer);
    f13(1);
    gl.drawElements(gl.TRIANGLES, v265[id].VertexSpriteIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    f230();
    v99 += 2;
}

function f26(id, x, y, s) {
    if (id > -1) {} else {
        famobi.log(_Tx(138) + id + " " + x + " " + y + " " + s);
        return;
    }
    var SizeX = v265[id].centerX * s;
    var SizeY = v265[id].centerY * s;
    f234(id, x, y, s);
    if (f176(x - SizeX, y - SizeY, x + SizeX, y + SizeY) == 1) return 1;
    return 0;
}

function f95(id, x, y, s) {
    if (id > -1) {} else {
        famobi.log("f95 " + id + " " + x + " " + y + " " + s);
        return;
    }
    var SizeX = v265[id].centerX * s;
    var SizeY = v265[id].centerY * s;
    f234(id, x, y, s);
    if (f175(x - SizeX, y - SizeY, x + SizeX, y + SizeY) == 1) return 1;
    return 0;
}

function f234(id, x, y, s) {
    if (id > -1) {} else {
        famobi.log(_Tx(139) + id + " " + x + " " + y + " " + s);
        return;
    }
    if (v265[id].Exist != 1) return;
    f201(v265[id].textureID);
    f203();
    f231(x, y, 0);
    if (s != 1.0) f299(s, s, 1);
    f231(v265[id].HPx, v265[id].HPy, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v265[id].VertexSpritePositionBuffer);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v265[id].VertexSpritePositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v265[id].VertexTextureSpriteCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, v265[id].VertexTextureSpriteCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v265[id].VertexSpriteIndexBuffer);
    f13(1);
    gl.drawElements(gl.TRIANGLES, v265[id].VertexSpriteIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    v99 += 2;
    f230();
}

function f235() {
    for (var i = 0; i < v247; i++) {
        v265.push();
        v265[i] = new f205();
    }
}
var v306 = 0;
var Wall = new Array();
var v266 = 0;
var WebGL_IsMeshConverter = false;

function f300() {
    this.xa;
    this.za;
    this.xb;
    this.zb;
}

function f301(xa, za, xb, zb) {
    Wall.push;
    Wall[v266] = new f300();
    Wall[v266].xa = xa;
    Wall[v266].za = za;
    Wall[v266].xb = xb;
    Wall[v266].zb = zb;
    v266++;
}
var OBJ = new Array();
var OBJ_Texture = new Array();
var OBJ_Texture_Name = new Array();
var MaxObjTextures = 150;

function f96(ImagePath) {
    if (ImagePath.substring(0, 5) == "dummy") return -1;
    for (i = 0; i < MaxObjTextures; i++) {
        if (OBJ_Texture_Name[i] == ImagePath) return i;
    }
    for (i = 0; i < MaxObjTextures; i++) {
        if (OBJ_Texture_Name[i] == "none") {
            OBJ_Texture_Name[i] = ImagePath;
            if (WebGL_IsMeshConverter == true)
                OBJ_Texture[i] = f160(-1, _Tx(142) + ImagePath + ".psd");
            else
            if (WebGL_ObjUseJPG == true)
                OBJ_Texture[i] = f160(-1, _Tx(143) + ImagePath + ".jpg");
            else
                OBJ_Texture[i] = f160(-1, "textures/" + ImagePath + ".png");
            return i;
        }
    }
    return -1;
}

function f46(ID) {
    if (OBJ[ID].Triangles < 1) return;
    if (v105[v141].vertexPositionAttribute == -1) return;
    for (var SubObjID = 0; SubObjID < OBJ[ID].ObjCount; SubObjID++) {
        if (f119(
                OBJ[ID].SubOBJ[SubObjID].MinX,
                OBJ[ID].SubOBJ[SubObjID].MinY,
                OBJ[ID].SubOBJ[SubObjID].MinZ,
                OBJ[ID].SubOBJ[SubObjID].MaxX,
                OBJ[ID].SubOBJ[SubObjID].MaxY,
                OBJ[ID].SubOBJ[SubObjID].MaxZ) == 1) {
            if (OBJ[ID].SubOBJ[SubObjID].NoShadow == 0) {
                gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
                gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
                gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
                f13(1);
                gl.drawElements(gl.TRIANGLES, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
                v99 += OBJ[ID].SubOBJ[SubObjID].Triangles;
            }
        }
    }
}

function f83(ID) {
    if (OBJ[ID].Triangles < 1) return;
    if (v105[v141].vertexPositionAttribute == -1 || v105[v141].textureCoordAttribute == -1) return;
    for (var SubObjID = 0; SubObjID < OBJ[ID].ObjCount; SubObjID++) {
        if (f119(
                OBJ[ID].SubOBJ[SubObjID].MinX,
                OBJ[ID].SubOBJ[SubObjID].MinY,
                OBJ[ID].SubOBJ[SubObjID].MinZ,
                OBJ[ID].SubOBJ[SubObjID].MaxX,
                OBJ[ID].SubOBJ[SubObjID].MaxY,
                OBJ[ID].SubOBJ[SubObjID].MaxZ) == 1) {
            if (OBJ[ID].SubOBJ[SubObjID].TextureID != -1) {
                PrevTexture = -1;
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, OBJ_Texture[OBJ[ID].SubOBJ[SubObjID].TextureID]);
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
            gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer);
            gl.vertexAttribPointer(v105[v141].textureCoordAttribute, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
            f13();
            gl.drawElements(gl.TRIANGLES, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
            v99 += OBJ[ID].SubOBJ[SubObjID].Triangles;
        }
    }
}

function f120(ID) {
    if (OBJ[ID].Triangles < 1) return;
    if (v105[v141].vertexPositionAttribute == -1) return;
    for (var SubObjID = 0; SubObjID < OBJ[ID].ObjCount; SubObjID++) {
        gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
        gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
        f13();
        gl.drawElements(gl.TRIANGLES, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    }
    v99 += OBJ[ID].Triangles;
}

function f97(ID) {
    if (OBJ[ID].Triangles < 1) return;
    if (v105[v141].vertexPositionAttribute == -1 || v105[v141].textureCoordAttribute == -1) return;
    for (var SubObjID = 0; SubObjID < OBJ[ID].ObjCount; SubObjID++) {
        if (OBJ[ID].SubOBJ[SubObjID].TextureID != -1) {
            PrevTexture = -1;
            gl.activeTexture(gl.TEXTURE0);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
        gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer);
        gl.vertexAttribPointer(v105[v141].textureCoordAttribute, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
        f13();
        gl.drawElements(gl.TRIANGLES, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    }
    v99 += OBJ[ID].Triangles;
}

function f236(ID) {
    if (OBJ[ID].Triangles < 1) return;
    if (v105[v141].vertexPositionAttribute == -1 || v105[v141].textureCoordAttribute == -1) return;
    for (var SubObjID = 0; SubObjID < OBJ[ID].ObjCount; SubObjID++) {
        if (OBJ[ID].SubOBJ[SubObjID].TextureID != -1) {
            PrevTexture = -1;
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, OBJ_Texture[OBJ[ID].SubOBJ[SubObjID].TextureID]);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
        gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer);
        gl.vertexAttribPointer(v105[v141].textureCoordAttribute, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
        f13();
        gl.drawElements(gl.TRIANGLES, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    }
    v99 += OBJ[ID].Triangles;
}

function f206() {
    this.Name;
    this.Triangles = 0;
    this.Vertexs = 0;
    this.UVs = 0;
    this.Material;
    this.VertexPositionBuffer;
    this.TextureCoordBuffer;
    this.VertexIndexBuffer;
    this.TextureID = -1;
    this.NoShadow = 0;
    this.MinX = 100000;
    this.MaxX = -100000;
    this.MinY = 100000;
    this.MaxY = -100000;
    this.MinZ = 100000;
    this.MaxZ = -100000;
}

function f237() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
}

function f252() {
    this.va = 0;
    this.vb = 0;
    this.vc = 0;
    this.ta = 0;
    this.tb = 0;
    this.tc = 0;
}

function f238() {
    this.Vec = 0;
    this.UV = 0;
}

function f184() {
    this.x = 0;
    this.z = 0;
    this.type = 0;
    this.activated = 0;
    this.Rot = 0;
}

function f27() {
    return;
    var LenA = v267.length - 1;
    for (var i = 0; i < v267.length; i++) {
        v268.push;
        v268[i] = new f184();
        v268[i].x = v267[LenA - i].x;
        v268[i].z = v267[LenA - i].z;
    }
    v268[0].x = v268[1].x;
    v268[0].z = v268[1].z;
    v268[LenA].x = v268[0].x;
    v268[LenA].z = v268[0].z;
}
var v267 = new Array();
var v268 = new Array();
var v81 = 0;
var v178 = new Array();
var v39 = 0;

function f98() {
    if (v267.length != 0) v267 = [];
    v81 = 0;
    if (v178.length != 0) v178 = [];
    v39 = 0;
    if (Wall.length != 0) Wall = [];
    v266 = 0;
}

function f99(ID) {
    if (OBJ[ID].Triangles != 0) {
        OBJ[ID].Triangles = 0;
        for (var SubObjID = 0; SubObjID < OBJ[ID].ObjCount; SubObjID++) {
            /*
            this.Name;
            this.Triangles=0;
            this.Vertexs=0;
            this.UVs=0;
            this.Material;
            this.VertexPositionBuffer;
            this.TextureCoordBuffer;
            this.VertexIndexBuffer;
            this.TextureID=-1;
            this.NoShadow=0;
            OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer=gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(TempSubVertex), gl.STATIC_DRAW);
            OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize=3;
            OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.numItems=CurrentSubVertex/3;
            */
            gl.deleteBuffer(OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
            gl.deleteBuffer(OBJ[ID].SubOBJ[SubObjID].TextureCoordBuffer);
            gl.deleteBuffer(OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
        }
        OBJ[ID].ObjCount = 0;
        return 1;
    }
    return 0;
}

function f239(ID, Name) {
    DataToDownload++;
    v97++;
    f99(ID);
    var TempTriangles = 0;
    var xmlhttp;
    famobi.log(_Tx(149) + ID + "]:" + Name + v222);
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            var str = xmlhttp.responseText;
            var OneLine = str.split("\n");
            var i;
            if (OneLine.length < 3) return;
            var ReadMode = 0;
            var SubObjID = -1;
            var TempVertex = new Array();
            var CurrentVertex = 0;
            var TempUVs = new Array();
            var CurrentUVs = 0;
            var TempFace = new Array();
            var CurrentFace = 0;
            var StartFace = 0;
            OBJ[ID].SubOBJ = new Array();
            for (i = 0; i < OneLine.length; i++) {
                if (ReadMode == 3 && OneLine[i][0] != "f" && OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 6) == _Tx(151)) {
                    var VecIndexA = TempFace[StartFace].vc - 1;
                    var vecX = TempVertex[VecIndexA].x;
                    var vecY = TempVertex[VecIndexA].y;
                    if (OBJ[ID].Max_X < vecX) OBJ[ID].Max_X = vecX;
                    OBJ[ID].Marker.push;
                    OBJ[ID].Marker[OBJ[ID].MarkersCount] = new f237();
                    OBJ[ID].Marker[OBJ[ID].MarkersCount].x = vecX;
                    OBJ[ID].Marker[OBJ[ID].MarkersCount].y = vecY;
                    OBJ[ID].Marker[OBJ[ID].MarkersCount].z = vecY;
                    OBJ[ID].MarkersCount++;
                    ReadMode = 0;
                    SubObjID--;
                    OBJ[ID].ObjCount--;
                }
                if (ReadMode == 3 && OneLine[i][0] != "f" && OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 7) == _Tx(152)) {
                    ReadMode = 0;
                    SubObjID--;
                    OBJ[ID].ObjCount--;
                }
                if (ReadMode == 3 && OneLine[i][0] != "f" && OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 8) == _Tx(153)) {
                    var VecIndexA = TempFace[StartFace].va - 1;
                    var VecIndexB = TempFace[StartFace].vb - 1;
                    v178.push;
                    v178[v39] = new f184();
                    v178[v39].x = TempVertex[VecIndexA].x;
                    v178[v39].z = TempVertex[VecIndexA].z;
                    v178[v39].Rot = f247(TempVertex[VecIndexA].x, TempVertex[VecIndexA].z, TempVertex[VecIndexB].x, TempVertex[VecIndexB].z);
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 11) == _Tx(154)) v178[v39].type = 1;
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 12) == _Tx(155)) v178[v39].type = 2;
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 13) == _Tx(156)) v178[v39].type = 3;
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 11) == _Tx(157)) v178[v39].type = 4;
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 12) == _Tx(158)) v178[v39].type = 5;
                    v39++;
                    ReadMode = 0;
                    SubObjID--;
                    OBJ[ID].ObjCount--;
                }
                if (ReadMode == 3 && OneLine[i][0] != "f" && OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 9) == _Tx(160)) {
                    var VecIndexA = TempFace[StartFace].va - 1;
                    v267.push;
                    v267[v81] = new f184();
                    v267[v81].x = TempVertex[VecIndexA].x;
                    v267[v81].z = TempVertex[VecIndexA].z;
                    v81++;
                    ReadMode = 0;
                    SubObjID--;
                    OBJ[ID].ObjCount--;
                }
                if (ReadMode == 3 && OneLine[i][0] != "f") {
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 9) == _Tx(168)) OBJ[ID].SubOBJ[SubObjID].NoShadow = 1;
                    else
                        OBJ[ID].SubOBJ[SubObjID].NoShadow = 0;
                    if (OBJ[ID].SubOBJ[SubObjID].Name.substring(0, 4) == "Wall") {
                        for (var j = StartFace; j < CurrentFace; j++) {
                            var VecIndexA = TempFace[j].va - 1;
                            var VecIndexB = TempFace[j].vb - 1;
                            var VecIndexC = TempFace[j].vc - 1;
                            if (TempVertex[VecIndexA].y < 0.1 && TempVertex[VecIndexB].y < 0.1) {
                                f301(TempVertex[VecIndexA].x, TempVertex[VecIndexA].z, TempVertex[VecIndexB].x, TempVertex[VecIndexB].z);
                            }
                            if (TempVertex[VecIndexB].y < 0.1 && TempVertex[VecIndexC].y < 0.1) {
                                f301(TempVertex[VecIndexB].x, TempVertex[VecIndexB].z, TempVertex[VecIndexC].x, TempVertex[VecIndexC].z);
                            }
                            if (TempVertex[VecIndexC].y < 0.1 && TempVertex[VecIndexA].y < 0.1) {
                                f301(TempVertex[VecIndexC].x, TempVertex[VecIndexC].z, TempVertex[VecIndexA].x, TempVertex[VecIndexA].z);
                            }
                        }
                    }
                    var TempIndex = new Array();
                    var CurrentIndex = 0;
                    var TempSubVertex = new Array();
                    var CurrentSubVertex = 0;
                    var TempSubUVs = new Array();
                    var CurrentSubUVs = 0;
                    for (var j = StartFace; j < CurrentFace; j++) {
                        TempIndex.push;
                        TempIndex[CurrentIndex] = CurrentIndex;
                        CurrentIndex++;
                        var VecIndex = TempFace[j].va - 1;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex] = TempVertex[VecIndex].x;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex + 1] = TempVertex[VecIndex].y;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex + 2] = TempVertex[VecIndex].z;
                        CurrentSubVertex += 3;
                        var VecUV = TempFace[j].ta - 1;
                        TempSubUVs.push;
                        TempSubUVs[CurrentSubUVs] = TempUVs[VecUV].x;
                        TempSubUVs.push;
                        TempSubUVs[CurrentSubUVs + 1] = TempUVs[VecUV].y;
                        CurrentSubUVs += 2;
                        TempIndex.push;
                        TempIndex[CurrentIndex] = CurrentIndex;
                        CurrentIndex++;
                        var VecIndex = TempFace[j].vb - 1;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex] = TempVertex[VecIndex].x;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex + 1] = TempVertex[VecIndex].y;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex + 2] = TempVertex[VecIndex].z;
                        CurrentSubVertex += 3;
                        var VecUV = TempFace[j].tb - 1;
                        TempSubUVs.push;
                        TempSubUVs[CurrentSubUVs] = TempUVs[VecUV].x;
                        TempSubUVs.push;
                        TempSubUVs[CurrentSubUVs + 1] = TempUVs[VecUV].y;
                        CurrentSubUVs += 2;
                        TempIndex.push;
                        TempIndex[CurrentIndex] = CurrentIndex;
                        CurrentIndex++;
                        var VecIndex = TempFace[j].vc - 1;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex] = TempVertex[VecIndex].x;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex + 1] = TempVertex[VecIndex].y;
                        TempSubVertex.push;
                        TempSubVertex[CurrentSubVertex + 2] = TempVertex[VecIndex].z;
                        CurrentSubVertex += 3;
                        var VecUV = TempFace[j].tc - 1;
                        TempSubUVs.push;
                        TempSubUVs[CurrentSubUVs] = TempUVs[VecUV].x;
                        TempSubUVs.push;
                        TempSubUVs[CurrentSubUVs + 1] = TempUVs[VecUV].y;
                        CurrentSubUVs += 2;
                    }
                    for (var j = 0; j < CurrentIndex; j++) {
                        var Index = TempIndex[j];
                        for (var k = j; k < CurrentIndex; k++) {
                            var B_Index = TempIndex[k];
                            if (j != k && TempIndex[j] != TempIndex[k] &&
                                TempSubVertex[Index * 3] == TempSubVertex[B_Index * 3] && TempSubVertex[Index * 3 + 1] == TempSubVertex[B_Index * 3 + 1] && TempSubVertex[Index * 3 + 2] == TempSubVertex[B_Index * 3 + 2] &&
                                TempSubUVs[Index * 2] == TempSubUVs[B_Index * 2] && TempSubUVs[Index * 2 + 1] == TempSubUVs[B_Index * 2 + 1]) {
                                TempIndex[k] = Index;
                                TempSubVertex[B_Index * 3] = TempSubVertex[CurrentSubVertex * 3];
                                TempSubVertex[B_Index * 3 + 1] = TempSubVertex[CurrentSubVertex * 3 + 1];
                                TempSubVertex[B_Index * 3 + 2] = TempSubVertex[CurrentSubVertex * 3 + 2];
                                TempSubUVs[B_Index * 2] = TempSubUVs[CurrentSubUVs * 2];
                                TempSubUVs[B_Index * 2 + 1] = TempSubUVs[CurrentSubUVs * 2 + 1];
                                for (var l = k; l < CurrentIndex + 1; l++) {
                                    if (TempIndex[j] == CurrentSubVertex) TempIndex[j] = B_Index;
                                }
                                CurrentSubVertex--;
                                CurrentSubUVs--;
                            }
                        }
                    }
                    OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(TempSubVertex), gl.STATIC_DRAW);
                    OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.itemSize = 3;
                    OBJ[ID].SubOBJ[SubObjID].VertexPositionBuffer.numItems = CurrentSubVertex / 3;
                    OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(TempSubUVs), gl.STATIC_DRAW);
                    OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer.itemSize = 2;
                    OBJ[ID].SubOBJ[SubObjID].VertexTextureCoordBuffer.numItems = CurrentSubUVs / 2;
                    OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer);
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(TempIndex), gl.STATIC_DRAW);
                    OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.itemSize = 1;
                    OBJ[ID].SubOBJ[SubObjID].VertexIndexBuffer.numItems = CurrentIndex;
                    ReadMode = 999;
                }
                if (ReadMode == 3 && OneLine[i][0] == "f") {
                    var va, vb, vc, vd = -1;
                    var ta, tb, tc, td;
                    var TempSTRA = OneLine[i].substring(2);
                    var TempSTRB = TempSTRA.split(" ");
                    for (var j = 0; j < TempSTRB.length; j++) {
                        var TempSTRC = TempSTRB[j].split("/");
                        if (j == 0) {
                            va = parseInt(TempSTRC[0]);
                            ta = parseInt(TempSTRC[1]);
                        }
                        if (j == 1) {
                            vb = parseInt(TempSTRC[0]);
                            tb = parseInt(TempSTRC[1]);
                        }
                        if (j == 2) {
                            vc = parseInt(TempSTRC[0]);
                            tc = parseInt(TempSTRC[1]);
                        }
                        if (j == 3) {
                            vd = parseInt(TempSTRC[0]);
                            td = parseInt(TempSTRC[1]);
                        }
                    }
                    TempFace.push;
                    TempFace[CurrentFace] = new f252();
                    TempFace[CurrentFace].va = va;
                    TempFace[CurrentFace].vb = vb;
                    TempFace[CurrentFace].vc = vc;
                    TempFace[CurrentFace].ta = ta;
                    TempFace[CurrentFace].tb = tb;
                    TempFace[CurrentFace].tc = tc;
                    CurrentFace++;
                    OBJ[ID].SubOBJ[SubObjID].Triangles++;
                    TempTriangles++;
                    if (TempSTRB[3].length > 2) {
                        /*
                        famobi.log ("vd: "+vd);
                        famobi.log (_Tx(170)+TempSTRB[0]);
                        famobi.log (_Tx(171)+TempSTRB[1]);
                        famobi.log (_Tx(172)+TempSTRB[2]);
                        famobi.log (_Tx(173)+TempSTRB[3]);
                        famobi.log (" ");
                        */
                        TempFace.push;
                        TempFace[CurrentFace] = new f252();
                        TempFace[CurrentFace].va = va;
                        TempFace[CurrentFace].vb = vc;
                        TempFace[CurrentFace].vc = vd;
                        TempFace[CurrentFace].ta = ta;
                        TempFace[CurrentFace].tb = tc;
                        TempFace[CurrentFace].tc = td;
                        CurrentFace++;
                        OBJ[ID].SubOBJ[SubObjID].Triangles++;
                        OBJ[ID].Triangles++;
                        TempTriangles++;
                    }
                }
                if (ReadMode == 2 && OneLine[i][0] != "v") {
                    ReadMode = 3;
                }
                if (ReadMode == 2 && OneLine[i][0] == "v" && OneLine[i][1] == "t") {
                    TempUVs.push;
                    TempUVs[CurrentUVs] = new f237();
                    var TempSTRA = OneLine[i].substring(3);
                    var TempSTRB = TempSTRA.split(" ");
                    TempUVs[CurrentUVs].x = parseFloat(TempSTRB[0]);
                    TempUVs[CurrentUVs].y = parseFloat(TempSTRB[1]);
                    TempUVs[CurrentUVs].z = 0.0;
                    CurrentUVs++;
                    OBJ[ID].SubOBJ[SubObjID].UVs++;
                }
                if (ReadMode == 1 && OneLine[i][0] != "v") {
                    ReadMode = 2;
                }
                if (ReadMode == 1 && OneLine[i][0] == "v") {
                    TempVertex.push;
                    TempVertex[CurrentVertex] = new f237();
                    var TempSTRA = OneLine[i].substring(2);
                    var TempSTRB = TempSTRA.split(" ");
                    TempVertex[CurrentVertex].x = parseFloat(TempSTRB[0]);
                    TempVertex[CurrentVertex].y = parseFloat(TempSTRB[1]);
                    TempVertex[CurrentVertex].z = parseFloat(TempSTRB[2]);
                    if (OBJ[ID].SubOBJ[SubObjID].MinX > TempVertex[CurrentVertex].x) OBJ[ID].SubOBJ[SubObjID].MinX = TempVertex[CurrentVertex].x;
                    if (OBJ[ID].SubOBJ[SubObjID].MaxX < TempVertex[CurrentVertex].x) OBJ[ID].SubOBJ[SubObjID].MaxX = TempVertex[CurrentVertex].x;
                    if (OBJ[ID].SubOBJ[SubObjID].MinY > TempVertex[CurrentVertex].y) OBJ[ID].SubOBJ[SubObjID].MinY = TempVertex[CurrentVertex].y;
                    if (OBJ[ID].SubOBJ[SubObjID].MaxY < TempVertex[CurrentVertex].y) OBJ[ID].SubOBJ[SubObjID].MaxY = TempVertex[CurrentVertex].y;
                    if (OBJ[ID].SubOBJ[SubObjID].MinZ > TempVertex[CurrentVertex].z) OBJ[ID].SubOBJ[SubObjID].MinZ = TempVertex[CurrentVertex].z;
                    if (OBJ[ID].SubOBJ[SubObjID].MaxZ < TempVertex[CurrentVertex].z) OBJ[ID].SubOBJ[SubObjID].MaxZ = TempVertex[CurrentVertex].z;
                    CurrentVertex++;
                    OBJ[ID].SubOBJ[SubObjID].Vertexs++;
                }
                if (OneLine[i][0] == "g") {
                    SubObjID++;
                    OBJ[ID].ObjCount++;
                    OBJ[ID].SubOBJ.push;
                    OBJ[ID].SubOBJ[SubObjID] = new f206();
                    OBJ[ID].SubOBJ[SubObjID].Vertexs = 0;
                    OBJ[ID].SubOBJ[SubObjID].Name = OneLine[i].substring(2);
                    StartFace = CurrentFace;
                    if (OneLine[i + 1][0] == "u") {
                        OBJ[ID].SubOBJ[SubObjID].TextureID = f96(OneLine[i + 1].substring(7));
                    }
                    i++;
                    ReadMode = 1;
                }
            }
            OBJ[ID].Triangles = TempTriangles;
            DataToDownload--;
            v97--;
            f27();
        }
    }
    xmlhttp.open("GET", _Tx(178) + Name + v222, true);
    xmlhttp.send();
}

function f277() {
    this.Triangles = 0;
    this.ObjCount = 0;
    this.SubOBJ;
    this.Min_X = 0;
    this.Max_X = 0;
    this.MarkersCount = 0;
    this.Marker = new Array();
}

function f207() {
    var i;
    for (i = 0; i < 50; i++) {
        OBJ.push;
        OBJ[i] = new f277();
    }
    for (i = 0; i < MaxObjTextures; i++) {
        OBJ_Texture.push;
        OBJ_Texture_Name.push;
        OBJ_Texture_Name[i] = "none";
    }
}

function f302(Name, MaterialID, UV, Vertex, Normals, Index, Min_X, Min_Y, Min_Z, Max_X, Max_Y, Max_Z) {
    this.Name = Name;
    this.MaterialID = MaterialID;
    this.UV = UV;
    this.Vertex = Vertex;
    this.Normals = Normals;
    this.Index = Index;
    this.Min_X = Min_X;
    this.Min_Y = Min_Y;
    this.Min_Z = Min_Z;
    this.Max_X = Max_X;
    this.Max_Y = Max_Y;
    this.Max_Z = Max_Z;
    this.VertexsBuffer;
    this.NormalsBuffer;
    this.UVsBuffer;
    this.IndexBuffer;
}

function f240() {
    this.MatID;
    this.TextureName;
    this.TextureID;
    this.R = 1.0;
    this.G = 1.0;
    this.B = 1.0;
    this.MatName;
    this.Effect_ID = 0;
    this.Effect_ValueA = 0;
    this.Effect_ValueB = 0;
    this.Effect_ValueC = 0;
}

function f253(Name, Matrix) {
    this.Name;
    this.Matrix = mat4.create();
    this.v175 = mat4.create();
}

function f303() {
    this.Material = [];
    this.SubObj = [];
    this.Element = [];
    this.v175 = mat4.create();
}
var v269 = [];

function f140(ID, Name, Matrix) {
    v269[ID].Element.push();
    var ElementID = v269[ID].Element.length;
    v269[ID].Element[ElementID] = new f253();
    v269[ID].Element[ElementID].Name = Name.toLowerCase();
    var MatrixEl = Matrix.split(" ");
    var TempMap = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var Mat = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    for (var j = 0; j < MatrixEl.length; j++) {
        TempMap[j] = parseFloat(MatrixEl[j]);
    }
    Mat[0] = TempMap[2];
    Mat[1] = TempMap[1];
    Mat[2] = -TempMap[0];
    Mat[3] = 0;
    Mat[4] = TempMap[5];
    Mat[5] = TempMap[4];
    Mat[6] = -TempMap[3];
    Mat[7] = 0;
    Mat[8] = TempMap[8];
    Mat[9] = TempMap[7];
    Mat[10] = -TempMap[6];
    Mat[11] = 0;
    Mat[12] = TempMap[11];
    Mat[13] = TempMap[10];
    Mat[14] = -TempMap[9];
    Mat[15] = 1.0;
    mat4.copy(v269[ID].Element[ElementID].Matrix, Mat);
    famobi.log(_Tx(179) + ElementID + "]:", Name);
    famobi.log("f140 [" + ElementID + "]:", Mat);
}

function f100(ID, Name, MaterialID,
    UV, Vertex, NormalsArray, Index,
    Min_X, Min_Y, Min_Z, Max_X, Max_Y, Max_Z) {
    v269[ID].SubObj.push();
    var SubID = v269[ID].SubObj.length;
    var ThisMaterialID = -1;
    for (var MatID = 0; MatID < v269[ID].Material.length; MatID++) {
        if (MaterialID == v269[ID].Material[MatID].MatID) {
            ThisMaterialID = MatID;
            break;
        }
    }
    v269[ID].SubObj[SubID] = new f302(Name, ThisMaterialID, UV, Vertex, NormalsArray, Index, Min_X, Min_Y, Min_Z, Max_X, Max_Y, Max_Z);
    v269[ID].SubObj[SubID].VertexsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v269[ID].SubObj[SubID].VertexsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Vertex), gl.STATIC_DRAW);
    v269[ID].SubObj[SubID].VertexsBuffer.itemSize = 3;
    v269[ID].SubObj[SubID].VertexsBuffer.numItems = Vertex.length / 3;
    v269[ID].SubObj[SubID].NormalsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v269[ID].SubObj[SubID].NormalsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(NormalsArray), gl.STATIC_DRAW);
    v269[ID].SubObj[SubID].NormalsBuffer.itemSize = 3;
    v269[ID].SubObj[SubID].NormalsBuffer.numItems = NormalsArray.length / 3;
    v269[ID].SubObj[SubID].UVsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v269[ID].SubObj[SubID].UVsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(UV), gl.STATIC_DRAW);
    v269[ID].SubObj[SubID].UVsBuffer.itemSize = 2;
    v269[ID].SubObj[SubID].UVsBuffer.numItems = UV.length / 2;
    v269[ID].SubObj[SubID].IndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v269[ID].SubObj[SubID].IndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(Index), gl.STATIC_DRAW);
    v269[ID].SubObj[SubID].IndexBuffer.itemSize = 1;
    v269[ID].SubObj[SubID].IndexBuffer.numItems = Index.length;
}
var v30 = true;
var Mesh_EnableTexture = true;
var v41 = false;
var v48 = false;

function f278(ID) {
    var Mesh_ShaderIDBackup = -1;
    if (v105[v141].vertexPositionAttribute == -1 || v105[v141].textureCoordAttribute == -1) return;
    if (v269[ID].SubObj.length < 1) return;
    for (var SubID = 0; SubID < v269[ID].SubObj.length; SubID++) {
        if (v41 == false || (v41 == true && f119(v269[ID].SubObj[SubID].Min_X, v269[ID].SubObj[SubID].Min_Y, v269[ID].SubObj[SubID].Min_Z, v269[ID].SubObj[SubID].Max_X, v269[ID].SubObj[SubID].Max_Y, v269[ID].SubObj[SubID].Max_Z) == 1)) {
            if (v269[ID].SubObj[SubID].MaterialID != -1) {
                if (Mesh_EnableTexture == true) {
                    gl.activeTexture(gl.TEXTURE0);
                    gl.bindTexture(gl.TEXTURE_2D, OBJ_Texture[v269[ID].Material[v269[ID].SubObj[SubID].MaterialID].TextureID]);
                }
                if (v30 == true) {
                    var MatID = v269[ID].SubObj[SubID].MaterialID;
                    switch (v269[ID].Material[MatID].Effect_ID) {
                        case -1:
                            f181(v269[ID].Material[MatID].R, v269[ID].Material[MatID].G, v269[ID].Material[MatID].B, 1.0);
                            break;
                        case v31:
                            Mesh_ShaderIDBackup = v141;
                            if (v48 == false) {
                                f228(1);
                            } else {
                                f228(5);
                                f31(2);
                                mat4.copy(v175, ShadowMav296);
                                f181(0.6, 0.5, 0.4, 1);
                            }
                            break;
                        case v59:
                            Mesh_ShaderIDBackup = v141;
                            f228(13);
                            f181(v269[ID].Material[MatID].Effect_ValueA, v269[ID].Material[MatID].Effect_ValueB, v269[ID].Material[MatID].Effect_ValueC, v252);
                            break;
                    }
                }
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, v269[ID].SubObj[SubID].VertexsBuffer);
            gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v269[ID].SubObj[SubID].VertexsBuffer.itemSize, gl.FLOAT, false, 0, 0);
            if (v105[v141].vertexNormalAttribute != -1) {
                gl.bindBuffer(gl.ARRAY_BUFFER, v269[ID].SubObj[SubID].NormalsBuffer);
                gl.vertexAttribPointer(v105[v141].vertexNormalAttribute, v269[ID].SubObj[SubID].NormalsBuffer.itemSize, gl.FLOAT, false, 0, 0);
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, v269[ID].SubObj[SubID].UVsBuffer);
            gl.vertexAttribPointer(v105[v141].textureCoordAttribute, v269[ID].SubObj[SubID].UVsBuffer.itemSize, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v269[ID].SubObj[SubID].IndexBuffer);
            f13();
            gl.drawElements(gl.TRIANGLES, v269[ID].SubObj[SubID].IndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
            v99 += v269[ID].SubObj[SubID].Index.length / 3.0;
            if (Mesh_ShaderIDBackup != -1) {
                f228(Mesh_ShaderIDBackup);
                Mesh_ShaderIDBackup = -1;
            }
        }
    }
}
var v31 = 1;
var v59 = 2;

function f121(ID, MaterialID, MatName, TextureName, R, G, B) {
    v269[ID].Material.push();
    var MatID = v269[ID].Material.length;
    v269[ID].Material[MatID] = new f240();
    v269[ID].Material[MatID].MatID = MaterialID;
    v269[ID].Material[MatID].MatName = MatName;
    v269[ID].Material[MatID].TextureName = TextureName;
    v269[ID].Material[MatID].R = R;
    v269[ID].Material[MatID].G = G;
    v269[ID].Material[MatID].B = B;
    v269[ID].Material[MatID].TextureID = f96(TextureName);
    if (MatName.search(_Tx(181)) == 0) {
        var NameParts = MatName.split(" ");
        var Effect_Name = NameParts[0].substring(7);
        var Effect_Values = NameParts[1].substring(6).split("/");
        v269[ID].Material[MatID].Effect_ID = 0;
        if (Effect_Name.toLowerCase() == _Tx(183)) v269[ID].Material[MatID].Effect_ID = v31;
        if (Effect_Name.toLowerCase() == "flag") v269[ID].Material[MatID].Effect_ID = v59;
        v269[ID].Material[MatID].Effect_ValueA = parseFloat(Effect_Values[0]);
        v269[ID].Material[MatID].Effect_ValueB = parseFloat(Effect_Values[1]);
        v269[ID].Material[MatID].Effect_ValueC = parseFloat(Effect_Values[2]);
    }
}

function f241(ID) {
    v269[ID].Material = [];
    v269[ID].SubObj = [];
}

function f279() {
    for (var i = 0; i < 100; i++) {
        v269.push();
        v269[i] = new f303();
    }
}

function f122(ID, Text) {
    var OneLine = Text.split("\n");
    for (var i = 0; i < OneLine.length; i++) {
        if (OneLine[i].search("Mat ") == 0) {
            var MatID = OneLine[i].substring(4);
            var MatTexture = OneLine[i + 1].substring(4);
            var MatColor = OneLine[i + 2].split(" ");
            var MatName = OneLine[i + 3].substring(4);;
            f121(ID, MatID, MatName, MatTexture, parseFloat(MatColor[1]), parseFloat(MatColor[2]), parseFloat(MatColor[3]));
            i += 3;
        }
        if (OneLine[i].search(_Tx(186)) == 0) {
            var Name = OneLine[i].substring(8);
            var Matrix = OneLine[i + 1].substring(14);
            f140(ID, Name, Matrix);
        }
        if (OneLine[i].search("Obj ") == 0) {
            var ObjName = OneLine[i].substring(4);
            var ObjMatID = OneLine[i + 1].substring(4);
            var ObjBox = OneLine[i + 2].substring(4).split(" ");
            var ObjUVs = OneLine[i + 3].substring(4).split(" ");
            var ObjVertexs = OneLine[i + 4].substring(4).split(" ");
            var ObjNormals = OneLine[i + 5].substring(4).split(" ");
            var ObjIndex = OneLine[i + 6].substring(4).split(" ");
            for (var j = 0; j < ObjUVs.length; j++) {
                ObjUVs[j] = parseFloat(ObjUVs[j]);
            }
            for (var j = 0; j < ObjVertexs.length; j++) {
                ObjVertexs[j] = parseFloat(ObjVertexs[j]);
            }
            for (var j = 0; j < ObjNormals.length; j++) {
                ObjNormals[j] = parseFloat(ObjNormals[j]);
            }
            for (var j = 0; j < ObjIndex.length; j++) {
                ObjIndex[j] = parseInt(ObjIndex[j]);
            }
            var MinX = parseFloat(ObjBox[0]);
            var MinY = parseFloat(ObjBox[1]);
            var MinZ = parseFloat(ObjBox[2]);
            var MaxX = parseFloat(ObjBox[3]);
            var MaxY = parseFloat(ObjBox[4]);
            var MaxZ = parseFloat(ObjBox[5]);
            f100(ID, ObjName, ObjMatID, ObjUVs, ObjVertexs, ObjNormals, ObjIndex, MinX, MinY, MinZ, MaxX, MaxY, MaxZ);
            i += 5;
        }
    }
    DataToDownload--;
    v97--;
}

function f280(ID, PATH) {
    DataToDownload++;
    v97++;
    if (v269[ID].SubObj.length > 0) {
        for (var SubID = 0; SubID < v269[ID].SubObj.length; SubID++) {
            if (gl.isBuffer(v269[ID].SubObj[SubID].VertexsBuffer) == true) {
                gl.deleteBuffer(v269[ID].SubObj[SubID].VertexsBuffer);
            }
            if (gl.isBuffer(v269[ID].SubObj[SubID].NormalsBuffer) == true) {
                gl.deleteBuffer(v269[ID].SubObj[SubID].NormalsBuffer);
            }
            if (gl.isBuffer(v269[ID].SubObj[SubID].UVsBuffer) == true) {
                gl.deleteBuffer(v269[ID].SubObj[SubID].UVsBuffer);
            }
            if (gl.isBuffer(v269[ID].SubObj[SubID].IndexBuffer) == true) {
                gl.deleteBuffer(v269[ID].SubObj[SubID].IndexBuffer);
            }
        }
        v269[ID] = [];
        v269[ID] = new f303();
    }
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 0) {}
        if (xmlhttp.readyState == 1) {}
        if (xmlhttp.readyState == 2) {}
        if (xmlhttp.readyState == 3) {}
        if (xmlhttp.readyState == 4) {
            var str = xmlhttp.response;
            var Zip = new JSZip();
            Zip.loadAsync(str).then(function(zip) {
                    return zip.file("mesh").async("text");
                })
                .then(function(txt) {
                    f122(ID, txt);
                });
        }
    }
    xmlhttp.open("GET", "datas/objects/" + PATH + ".mesh" + v222, true);
    xmlhttp.responseType = "blob";
    xmlhttp.send();
}
var v211 = [];

function f84() {
    this.Parent = 0;
    this.Lenght = 0;
    this.IsSpring = 0;
    this.SpringSpeed = 0;
    this.SpringDamper = 0;
    this.Matrix = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    this.MatrixRela = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    this.MatrixInverse = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
}

function f166() {
    this.Triangles = 0;
    this.Vertexs = 0;
    this.UVs = 0;
    this.VertexPositionBuffer = null;
    this.NormalBuffer = null;
    this.TextureCoordBuffer = null;
    this.VertexIndexBuffer = null;
    this.Bones = [];
    this.BoneLabTempVertex = [];
    this.BoneLabTempNormal = [];
    this.BoneLabTempUV = [];
    this.BoneLabTempIndex = [];
    this.AnimID = -1;
    this.AnimFrame = 0;
    this.Prev_AnimID = -1;
    this.Prev_AnimFrame = -1;
    this.AnimSlide = 0;
    this.AnimSmooth = 0;
    this.AttachedToMeshID = -1;
    this.AttachedToBoneID = -1;
    this.RotationX = 0;
    this.RotationY = 0;
    this.RotationZ = 0;
    this.v175 = mat4.create();
}

function f208() {
    var i;
    for (i = 0; i < 500; i++) {
        v211.push();
    }
}

function f12(ID) {
    if (v105[v141].BonesPositionUniform == null) return;
    var MatrixPositionArray = [];
    for (var i = 0; i < v211[ID].Bones.length; i++) {
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[12]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[13]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[14]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[0]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[1]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[2]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[4]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[5]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[6]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[8]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[9]);
        MatrixPositionArray.push(v211[ID].Bones[i].Matrix[10]);
    }
    gl.uniform3fv(v105[v141].BonesPositionUniform, new Float32Array(MatrixPositionArray));
}

function f123(ID) {
    if (v211[ID].Triangles < 1) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, v211[ID].VertexPositionBuffer);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v211[ID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    if (v105[v141].vertexNormalAttribute != -1) {
        gl.bindBuffer(gl.ARRAY_BUFFER, v211[ID].NormalBuffer);
        gl.vertexAttribPointer(v105[v141].vertexNormalAttribute, v211[ID].NormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, v211[ID].VertexTextureCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, v211[ID].VertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    f13();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v211[ID].VertexIndexBuffer);
    gl.drawElements(gl.TRIANGLES, v211[ID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    v99 += v211[ID].Triangles;
}

function f18(ID, ParentMeshID, ParendBoneID) {
    v211[ID].AttachedToMeshID = ParentMeshID;
    v211[ID].AttachedToBoneID = ParendBoneID;
}

function f67(MeshID, a) {
    v211[MeshID].RotationX = a;
}

function f68(MeshID, a) {
    v211[MeshID].RotationY = a;
}

function f69(MeshID, a) {
    v211[MeshID].RotationZ = a;
}

function f47(ID) {
    var VertexCount = v211[ID].BoneLabTempVertex.length;
    var UvsCount = v211[ID].BoneLabTempUV.length;
    var IndexCount = v211[ID].BoneLabTempIndex.length;
    var GeneratedVertex = [];
    for (var i = 0; i < VertexCount; i++) {
        GeneratedVertex.push(v211[ID].BoneLabTempVertex[i].x);
        GeneratedVertex.push(v211[ID].BoneLabTempVertex[i].y);
        GeneratedVertex.push(v211[ID].BoneLabTempVertex[i].z);
        GeneratedVertex.push(v211[ID].BoneLabTempVertex[i].w);
    }
    var GeneratedNormal = [];
    for (var i = 0; i < VertexCount; i++) {
        GeneratedNormal.push(v211[ID].BoneLabTempNormal[i].x);
        GeneratedNormal.push(v211[ID].BoneLabTempNormal[i].y);
        GeneratedNormal.push(v211[ID].BoneLabTempNormal[i].z);
    }
    var GeneratedUVs = [];
    for (var i = 0; i < UvsCount; i++) {
        GeneratedUVs.push(v211[ID].BoneLabTempUV[i].x);
        GeneratedUVs.push(1.0 - v211[ID].BoneLabTempUV[i].y);
    }
    var GeneratedIndex = [];
    for (var i = 0; i < IndexCount; i++) {
        GeneratedIndex.push(v211[ID].BoneLabTempIndex[i].x - 1);
        GeneratedIndex.push(v211[ID].BoneLabTempIndex[i].y - 1);
        GeneratedIndex.push(v211[ID].BoneLabTempIndex[i].z - 1);
    }
    v211[ID].VertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v211[ID].VertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(GeneratedVertex), gl.STATIC_DRAW);
    v211[ID].VertexPositionBuffer.itemSize = 4;
    v211[ID].VertexPositionBuffer.numItems = VertexCount;
    v211[ID].NormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v211[ID].NormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(GeneratedNormal), gl.STATIC_DRAW);
    v211[ID].NormalBuffer.itemSize = 3;
    v211[ID].NormalBuffer.numItems = VertexCount;
    v211[ID].VertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v211[ID].VertexTextureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(GeneratedUVs), gl.STATIC_DRAW);
    v211[ID].VertexTextureCoordBuffer.itemSize = 2;
    v211[ID].VertexTextureCoordBuffer.numItems = UvsCount;
    v211[ID].VertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v211[ID].VertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(GeneratedIndex), gl.STATIC_DRAW);
    v211[ID].VertexIndexBuffer.itemSize = 1;
    v211[ID].VertexIndexBuffer.numItems = IndexCount * 3;
}

function f124(ID, Name) {
    if (v211[ID] != null) {
        if (gl.isBuffer(v211[ID].VertexPositionBuffer) == true) {
            gl.deleteBuffer(v211[ID].VertexPositionBuffer);
            v211[ID].VertexPositionBuffer = null;
        }
        if (gl.isBuffer(v211[ID].NormalBuffer) == true) {
            gl.deleteBuffer(v211[ID].NormalBuffer);
            v211[ID].NormalBuffer = null;
        }
        if (gl.isBuffer(v211[ID].TextureCoordBuffer) == true) {
            gl.deleteBuffer(v211[ID].TextureCoordBuffer);
            v211[ID].TextureCoordBuffer = null;
        }
        if (gl.isBuffer(v211[ID].VertexIndexBuffer) == true) {
            gl.deleteBuffer(v211[ID].VertexIndexBuffer);
            v211[ID].VertexIndexBuffer = null;
        }
    }
    v211[ID] = new f166();
    DataToDownload++;
    v97++;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 0) {}
            if (xmlhttp.readyState == 1) {}
            if (xmlhttp.readyState == 2) {}
            if (xmlhttp.readyState == 3) {}
            if (xmlhttp.readyState == 4) {
                var BoneCount = 0;
                var str = xmlhttp.responseText;
                var OneLine = str.split("\n");
                var i;
                if (OneLine.length < 3) return;
                var ReadingMode = 0;
                for (i = 0; i < OneLine.length; i++) {
                    if (ReadingMode == 4) {
                        if (OneLine[i].search(_Tx(195)) == 0) {
                            BoneCount = v211[ID].Bones.length;
                            v211[ID].Bones.push();
                            v211[ID].Bones[BoneCount] = new f84();
                        }
                        if (OneLine[i].search(_Tx(197)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].Parent = parseInt(ThisLine[1]);
                        }
                        if (OneLine[i].search(_Tx(199)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].Lenght = parseFloat(ThisLine[1]);
                        }
                        if (OneLine[i].search(_Tx(201)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].IsSpring = parseInt(ThisLine[1]);
                        }
                        if (OneLine[i].search(_Tx(203)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].SpringSpeed = parseFloat(ThisLine[1]);
                        }
                        if (OneLine[i].search(_Tx(205)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].SpringDamper = parseFloat(ThisLine[1]);
                        }
                        if (OneLine[i].search(_Tx(207)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].Matrix[0] = parseFloat(ThisLine[1]);
                            v211[ID].Bones[BoneCount].Matrix[1] = parseFloat(ThisLine[2]);
                            v211[ID].Bones[BoneCount].Matrix[2] = parseFloat(ThisLine[3]);
                            v211[ID].Bones[BoneCount].Matrix[3] = parseFloat(ThisLine[4]);
                            v211[ID].Bones[BoneCount].Matrix[4] = parseFloat(ThisLine[5]);
                            v211[ID].Bones[BoneCount].Matrix[5] = parseFloat(ThisLine[6]);
                            v211[ID].Bones[BoneCount].Matrix[6] = parseFloat(ThisLine[7]);
                            v211[ID].Bones[BoneCount].Matrix[7] = parseFloat(ThisLine[8]);
                            v211[ID].Bones[BoneCount].Matrix[8] = parseFloat(ThisLine[9]);
                            v211[ID].Bones[BoneCount].Matrix[9] = parseFloat(ThisLine[10]);
                            v211[ID].Bones[BoneCount].Matrix[10] = parseFloat(ThisLine[11]);
                            v211[ID].Bones[BoneCount].Matrix[11] = parseFloat(ThisLine[12]);
                            v211[ID].Bones[BoneCount].Matrix[12] = parseFloat(ThisLine[13]);
                            v211[ID].Bones[BoneCount].Matrix[13] = parseFloat(ThisLine[14]);
                            v211[ID].Bones[BoneCount].Matrix[14] = parseFloat(ThisLine[15]);
                            v211[ID].Bones[BoneCount].Matrix[15] = parseFloat(ThisLine[16]);
                        }
                        if (OneLine[i].search(_Tx(208)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].MatrixRela[0] = parseFloat(ThisLine[1]);
                            v211[ID].Bones[BoneCount].MatrixRela[1] = parseFloat(ThisLine[2]);
                            v211[ID].Bones[BoneCount].MatrixRela[2] = parseFloat(ThisLine[3]);
                            v211[ID].Bones[BoneCount].MatrixRela[3] = parseFloat(ThisLine[4]);
                            v211[ID].Bones[BoneCount].MatrixRela[4] = parseFloat(ThisLine[5]);
                            v211[ID].Bones[BoneCount].MatrixRela[5] = parseFloat(ThisLine[6]);
                            v211[ID].Bones[BoneCount].MatrixRela[6] = parseFloat(ThisLine[7]);
                            v211[ID].Bones[BoneCount].MatrixRela[7] = parseFloat(ThisLine[8]);
                            v211[ID].Bones[BoneCount].MatrixRela[8] = parseFloat(ThisLine[9]);
                            v211[ID].Bones[BoneCount].MatrixRela[9] = parseFloat(ThisLine[10]);
                            v211[ID].Bones[BoneCount].MatrixRela[10] = parseFloat(ThisLine[11]);
                            v211[ID].Bones[BoneCount].MatrixRela[11] = parseFloat(ThisLine[12]);
                            v211[ID].Bones[BoneCount].MatrixRela[12] = parseFloat(ThisLine[13]);
                            v211[ID].Bones[BoneCount].MatrixRela[13] = parseFloat(ThisLine[14]);
                            v211[ID].Bones[BoneCount].MatrixRela[14] = parseFloat(ThisLine[15]);
                            v211[ID].Bones[BoneCount].MatrixRela[15] = parseFloat(ThisLine[16]);
                        }
                        if (OneLine[i].search(_Tx(209)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Bones[BoneCount].MatrixInverse[0] = parseFloat(ThisLine[1]);
                            v211[ID].Bones[BoneCount].MatrixInverse[1] = parseFloat(ThisLine[2]);
                            v211[ID].Bones[BoneCount].MatrixInverse[2] = parseFloat(ThisLine[3]);
                            v211[ID].Bones[BoneCount].MatrixInverse[3] = parseFloat(ThisLine[4]);
                            v211[ID].Bones[BoneCount].MatrixInverse[4] = parseFloat(ThisLine[5]);
                            v211[ID].Bones[BoneCount].MatrixInverse[5] = parseFloat(ThisLine[6]);
                            v211[ID].Bones[BoneCount].MatrixInverse[6] = parseFloat(ThisLine[7]);
                            v211[ID].Bones[BoneCount].MatrixInverse[7] = parseFloat(ThisLine[8]);
                            v211[ID].Bones[BoneCount].MatrixInverse[8] = parseFloat(ThisLine[9]);
                            v211[ID].Bones[BoneCount].MatrixInverse[9] = parseFloat(ThisLine[10]);
                            v211[ID].Bones[BoneCount].MatrixInverse[10] = parseFloat(ThisLine[11]);
                            v211[ID].Bones[BoneCount].MatrixInverse[11] = parseFloat(ThisLine[12]);
                            v211[ID].Bones[BoneCount].MatrixInverse[12] = parseFloat(ThisLine[13]);
                            v211[ID].Bones[BoneCount].MatrixInverse[13] = parseFloat(ThisLine[14]);
                            v211[ID].Bones[BoneCount].MatrixInverse[14] = parseFloat(ThisLine[15]);
                            v211[ID].Bones[BoneCount].MatrixInverse[15] = parseFloat(ThisLine[16]);
                        }
                    }
                    if (ReadingMode == 3) {
                        var ThisLine = OneLine[i].split("\t");
                        if (ThisLine.length == 3) {
                            v211[ID].BoneLabTempIndex.push();
                            var CuID = v211[ID].BoneLabTempIndex.length;
                            v211[ID].BoneLabTempIndex[CuID] = new f237();
                            v211[ID].BoneLabTempIndex[CuID].x = parseInt(ThisLine[0]);
                            v211[ID].BoneLabTempIndex[CuID].y = parseInt(ThisLine[1]);
                            v211[ID].BoneLabTempIndex[CuID].z = parseInt(ThisLine[2]);
                        }
                        if (OneLine[i].search("Bones") == 0) ReadingMode = 4;
                    }
                    if (ReadingMode == 2) {
                        var ThisLine = OneLine[i].split("\t");
                        if (ThisLine.length == 2) {
                            v211[ID].BoneLabTempUV.push();
                            var CuID = v211[ID].BoneLabTempUV.length;
                            v211[ID].BoneLabTempUV[CuID] = new f237();
                            v211[ID].BoneLabTempUV[CuID].x = parseFloat(ThisLine[0]);
                            v211[ID].BoneLabTempUV[CuID].y = parseFloat(ThisLine[1]);
                        }
                        if (OneLine[i].search("Index") == 0) ReadingMode = 3;
                    }
                    if (ReadingMode == 1) {
                        var ThisLine = OneLine[i].split(" ");
                        if (ThisLine.length == 7) {
                            v211[ID].BoneLabTempVertex.push();
                            var CuID = v211[ID].BoneLabTempVertex.length;
                            v211[ID].BoneLabTempVertex[CuID] = new f237();
                            v211[ID].BoneLabTempVertex[CuID].x = parseFloat(ThisLine[0]);
                            v211[ID].BoneLabTempVertex[CuID].y = parseFloat(ThisLine[1]);
                            v211[ID].BoneLabTempVertex[CuID].z = parseFloat(ThisLine[2]);
                            v211[ID].BoneLabTempVertex[CuID].w = parseInt(ThisLine[6]);
                            v211[ID].BoneLabTempNormal.push();
                            v211[ID].BoneLabTempNormal[CuID] = new f237();
                            v211[ID].BoneLabTempNormal[CuID].x = parseFloat(ThisLine[3]);
                            v211[ID].BoneLabTempNormal[CuID].y = parseFloat(ThisLine[4]);
                            v211[ID].BoneLabTempNormal[CuID].z = parseFloat(ThisLine[5]);
                        }
                        if (OneLine[i].search("UV") == 0) ReadingMode = 2;
                    }
                    if (ReadingMode == 0) {
                        if (OneLine[i].search(_Tx(210)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Vertexs = parseInt(ThisLine[1]);
                        }
                        if (OneLine[i].search(_Tx(212)) == 0) {
                            var ThisLine = OneLine[i].split(" ");
                            v211[ID].Triangles = parseInt(ThisLine[1]);
                            ReadingMode = 1;
                        }
                    }
                }
                f47(ID);
                DataToDownload--;
                v97--;
            }
        }
        /*
        xmlhttp.timeout=10000;
        xmlhttp.ontimeout=function (e) {
        famobi.log (_Tx(215)+Name+_Tx(216));
        };
        */
    xmlhttp.open("GET", _Tx(217) + Name + v222, true);
    xmlhttp.send();
}
var BoneLabAnimation = [];

function f48() {
    this.TinyMatrix = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
}

function f49() {
    this.BoneCount = 0;
    this.Bone = [];
}

function f50() {
    this.FrameCount = 0;
    this.OneFrame = [];
    this.NextAnim = -1;
    this.Speed = 1.0;
}

function f185() {
    for (var i = 0; i < 50; i++) {
        BoneLabAnimation.push;
        BoneLabAnimation[i] = new f50();
    }
}

function f51(meshID, boneID, MatrixPart) {
    var AnimID = v211[meshID].AnimID;
    var FrameID = v211[meshID].AnimFrame;
    var Prev_AnimID = v211[meshID].Prev_AnimID;
    var Prev_FrameID = v211[meshID].Prev_AnimFrame;
    var slide = v211[meshID].AnimSlide;
    if (slide > 1) slide = 1;
    if (slide < 0) slide = 0;
    var antislide = 1.0 - slide;
    return BoneLabAnimation[Prev_AnimID].OneFrame[Prev_FrameID].Bone[boneID].TinyMatrix[MatrixPart] * antislide + BoneLabAnimation[AnimID].OneFrame[FrameID].Bone[boneID].TinyMatrix[MatrixPart] * slide;
}

function f52(meshID) {
    return v211[meshID].AnimID;
}

function f28(animID, Speed) {
    BoneLabAnimation[animID].Speed = Speed;
}

function f14(animID, NextID) {
    BoneLabAnimation[animID].NextAnim = NextID;
}

function f21(meshID, AnimSmooth) {
    v211[meshID].AnimSmooth = AnimSmooth;
}

function f70(animID, meshID) {
    if (animID != -1 && animID != v211[meshID].AnimID && v211[meshID].AnimSmooth == 0) v211[meshID].AnimFrame = 0;
    if (animID == -1) animID = v211[meshID].AnimID;
    else v211[meshID].AnimID = animID;
    v211[meshID].AnimSlide += v260 * 0.03 * BoneLabAnimation[animID].Speed;
    if (v211[meshID].AnimSlide > 1.0) {
        v211[meshID].AnimSlide -= 1.0;
        v211[meshID].Prev_AnimID = v211[meshID].AnimID;
        v211[meshID].Prev_AnimFrame = v211[meshID].AnimFrame;
        v211[meshID].AnimFrame++;
        if (v211[meshID].AnimFrame > BoneLabAnimation[animID].FrameCount - 2) {
            v211[meshID].AnimFrame = 0;
            v211[meshID].AnimID = BoneLabAnimation[animID].NextAnim;
        }
    }
    if (v211[meshID].Prev_AnimID == -1) v211[meshID].Prev_AnimID = v211[meshID].AnimID;
    if (v211[meshID].Prev_AnimFrame == -1) v211[meshID].Prev_AnimFrame = v211[meshID].AnimFrame;
    var CurrentFrame = v211[meshID].AnimFrame;
    var BoneCount = v211[meshID].Bones.length;
    for (var i = 1; i < BoneCount; i++) {
        var AnimBoneID = i - 1;
        var ParentBone = v211[meshID].Bones[i].Parent;
        if (ParentBone == -1) {
            if (v211[meshID].AttachedToMeshID != -1) {
                v211[meshID].Bones[i].Matrix = v211[v211[meshID].AttachedToMeshID].Bones[v211[meshID].AttachedToBoneID].Matrix;
            } else {
                v211[meshID].Bones[i].Matrix[0] = f51(meshID, AnimBoneID, 0);
                v211[meshID].Bones[i].Matrix[1] = f51(meshID, AnimBoneID, 1);
                v211[meshID].Bones[i].Matrix[2] = f51(meshID, AnimBoneID, 2);
                v211[meshID].Bones[i].Matrix[4] = f51(meshID, AnimBoneID, 3);
                v211[meshID].Bones[i].Matrix[5] = f51(meshID, AnimBoneID, 4);
                v211[meshID].Bones[i].Matrix[6] = f51(meshID, AnimBoneID, 5);
                v211[meshID].Bones[i].Matrix[8] = f51(meshID, AnimBoneID, 6);
                v211[meshID].Bones[i].Matrix[9] = f51(meshID, AnimBoneID, 7);
                v211[meshID].Bones[i].Matrix[10] = f51(meshID, AnimBoneID, 8);
                v211[meshID].Bones[i].Matrix[12] = f51(meshID, AnimBoneID, 9);
                v211[meshID].Bones[i].Matrix[13] = f51(meshID, AnimBoneID, 10);
                v211[meshID].Bones[i].Matrix[14] = f51(meshID, AnimBoneID, 11);
            }
        } else {
            v211[meshID].Bones[i].MatrixRela[0] = f51(meshID, AnimBoneID, 0);
            v211[meshID].Bones[i].MatrixRela[1] = f51(meshID, AnimBoneID, 1);
            v211[meshID].Bones[i].MatrixRela[2] = f51(meshID, AnimBoneID, 2);
            v211[meshID].Bones[i].MatrixRela[4] = f51(meshID, AnimBoneID, 3);
            v211[meshID].Bones[i].MatrixRela[5] = f51(meshID, AnimBoneID, 4);
            v211[meshID].Bones[i].MatrixRela[6] = f51(meshID, AnimBoneID, 5);
            v211[meshID].Bones[i].MatrixRela[8] = f51(meshID, AnimBoneID, 6);
            v211[meshID].Bones[i].MatrixRela[9] = f51(meshID, AnimBoneID, 7);
            v211[meshID].Bones[i].MatrixRela[10] = f51(meshID, AnimBoneID, 8);
            if (i == 2) {
                if (v211[meshID].RotationX != 0) v211[meshID].Bones[i].MatrixRela = f139(1, 0, 0, v211[meshID].RotationX);
                if (v211[meshID].RotationY != 0) v211[meshID].Bones[i].MatrixRela = f139(0, 1, 0, v211[meshID].RotationY);
                if (v211[meshID].RotationZ != 0) v211[meshID].Bones[i].MatrixRela = f139(0, 0, 1, v211[meshID].RotationZ);
            }
            v211[meshID].Bones[i].MatrixRela[12] = f51(meshID, AnimBoneID, 9);
            v211[meshID].Bones[i].MatrixRela[13] = f51(meshID, AnimBoneID, 10);
            v211[meshID].Bones[i].MatrixRela[14] = f51(meshID, AnimBoneID, 11);
            if (v211[meshID].AnimSmooth > 0) {
                var Smooth = v211[meshID].AnimSmooth;
                var SmoothB = 1.0 - Smooth;
                v211[meshID].Bones[i].Matrix[0] = v211[meshID].Bones[i].Matrix[0] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[0] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[1] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[2]) * SmoothB;
                v211[meshID].Bones[i].Matrix[1] = v211[meshID].Bones[i].Matrix[1] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[0] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[1] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[2]) * SmoothB;
                v211[meshID].Bones[i].Matrix[2] = v211[meshID].Bones[i].Matrix[2] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[0] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[1] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[2]) * SmoothB;
                v211[meshID].Bones[i].Matrix[3] = 0;
                v211[meshID].Bones[i].Matrix[4] = v211[meshID].Bones[i].Matrix[4] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[4] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[5] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[6]) * SmoothB;
                v211[meshID].Bones[i].Matrix[5] = v211[meshID].Bones[i].Matrix[5] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[4] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[5] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[6]) * SmoothB;
                v211[meshID].Bones[i].Matrix[6] = v211[meshID].Bones[i].Matrix[6] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[4] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[5] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[6]) * SmoothB;
                v211[meshID].Bones[i].Matrix[7] = 0;
                v211[meshID].Bones[i].Matrix[8] = v211[meshID].Bones[i].Matrix[8] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[8] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[9] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[10]) * SmoothB;
                v211[meshID].Bones[i].Matrix[9] = v211[meshID].Bones[i].Matrix[9] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[8] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[9] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[10]) * SmoothB;
                v211[meshID].Bones[i].Matrix[10] = v211[meshID].Bones[i].Matrix[10] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[8] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[9] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[10]) * SmoothB;
                v211[meshID].Bones[i].Matrix[11] = 0;
                v211[meshID].Bones[i].Matrix[12] = v211[meshID].Bones[i].Matrix[12] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[12] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[13] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[14] + v211[meshID].Bones[ParentBone].Matrix[12]) * SmoothB;
                v211[meshID].Bones[i].Matrix[13] = v211[meshID].Bones[i].Matrix[13] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[12] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[13] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[14] + v211[meshID].Bones[ParentBone].Matrix[13]) * SmoothB;
                v211[meshID].Bones[i].Matrix[14] = v211[meshID].Bones[i].Matrix[14] * Smooth + (v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[12] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[13] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[14] + v211[meshID].Bones[ParentBone].Matrix[14]) * SmoothB;
                v211[meshID].Bones[i].Matrix[15] = 1;
            } else {
                v211[meshID].Bones[i].Matrix[0] = v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[0] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[1] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[2];
                v211[meshID].Bones[i].Matrix[1] = v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[0] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[1] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[2];
                v211[meshID].Bones[i].Matrix[2] = v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[0] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[1] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[2];
                v211[meshID].Bones[i].Matrix[3] = 0;
                v211[meshID].Bones[i].Matrix[4] = v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[4] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[5] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[6];
                v211[meshID].Bones[i].Matrix[5] = v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[4] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[5] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[6];
                v211[meshID].Bones[i].Matrix[6] = v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[4] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[5] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[6];
                v211[meshID].Bones[i].Matrix[7] = 0;
                v211[meshID].Bones[i].Matrix[8] = v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[8] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[9] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[10];
                v211[meshID].Bones[i].Matrix[9] = v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[8] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[9] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[10];
                v211[meshID].Bones[i].Matrix[10] = v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[8] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[9] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[10];
                v211[meshID].Bones[i].Matrix[11] = 0;
                v211[meshID].Bones[i].Matrix[12] = v211[meshID].Bones[ParentBone].Matrix[0] * v211[meshID].Bones[i].MatrixRela[12] + v211[meshID].Bones[ParentBone].Matrix[4] * v211[meshID].Bones[i].MatrixRela[13] + v211[meshID].Bones[ParentBone].Matrix[8] * v211[meshID].Bones[i].MatrixRela[14] + v211[meshID].Bones[ParentBone].Matrix[12];
                v211[meshID].Bones[i].Matrix[13] = v211[meshID].Bones[ParentBone].Matrix[1] * v211[meshID].Bones[i].MatrixRela[12] + v211[meshID].Bones[ParentBone].Matrix[5] * v211[meshID].Bones[i].MatrixRela[13] + v211[meshID].Bones[ParentBone].Matrix[9] * v211[meshID].Bones[i].MatrixRela[14] + v211[meshID].Bones[ParentBone].Matrix[13];
                v211[meshID].Bones[i].Matrix[14] = v211[meshID].Bones[ParentBone].Matrix[2] * v211[meshID].Bones[i].MatrixRela[12] + v211[meshID].Bones[ParentBone].Matrix[6] * v211[meshID].Bones[i].MatrixRela[13] + v211[meshID].Bones[ParentBone].Matrix[10] * v211[meshID].Bones[i].MatrixRela[14] + v211[meshID].Bones[ParentBone].Matrix[14];
                v211[meshID].Bones[i].Matrix[15] = 1;
            }
        }
    }
    if (v211[meshID].AnimSmooth > 0) {
        v211[meshID].AnimSmooth -= v260 * 0.0001;
        if (v211[meshID].AnimSmooth < 0) v211[meshID].AnimSmooth = 0;
    }
}

function f101(ID, Name) {
    var xmlhttp;
    DataToDownload++;
    v98++;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
            /*
            if (xmlhttp.readyState==0)
            {
            famobi.log (_Tx(188)+Name);
            }
            if (xmlhttp.readyState==1)
            {
            famobi.log (_Tx(189)+Name);
            }
            if (xmlhttp.readyState==2)
            {
            famobi.log (_Tx(190)+Name);
            }
            if (xmlhttp.readyState==3)
            {
            famobi.log (_Tx(191)+Name);
            }
            */
            if (xmlhttp.readyState == 4) {
                var str = xmlhttp.responseText;
                var OneLine = str.split("\n");
                var i;
                var ReadingMode = 0;
                var CurrentFrame = 0;
                for (i = 0; i < OneLine.length; i++) {
                    if (OneLine[i].search(_Tx(221)) == 0) {
                        CurrentFrame = BoneLabAnimation[ID].FrameCount;
                        BoneLabAnimation[ID].OneFrame.push;
                        BoneLabAnimation[ID].OneFrame[CurrentFrame] = new f49();
                        BoneLabAnimation[ID].NextAnim = ID;
                        BoneLabAnimation[ID].FrameCount++;
                    }
                    if (OneLine[i].search(">") == 0) {
                        var ThisLine = OneLine[i].split(" ");
                        var BoneCount = BoneLabAnimation[ID].OneFrame[CurrentFrame].BoneCount;
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone.push;
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount] = new f48();
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[0] = parseFloat(ThisLine[2]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[1] = parseFloat(ThisLine[3]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[2] = parseFloat(ThisLine[4]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[3] = parseFloat(ThisLine[5]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[4] = parseFloat(ThisLine[6]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[5] = parseFloat(ThisLine[7]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[6] = parseFloat(ThisLine[8]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[7] = parseFloat(ThisLine[9]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[8] = parseFloat(ThisLine[10]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[9] = parseFloat(ThisLine[11]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[10] = parseFloat(ThisLine[12]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].Bone[BoneCount].TinyMatrix[11] = parseFloat(ThisLine[13]);
                        BoneLabAnimation[ID].OneFrame[CurrentFrame].BoneCount++;
                    }
                }
                DataToDownload--;
                v98--;
                return;
            }
        }
        /*
        xmlhttp.timeout=10000;
        xmlhttp.ontimeout=function (e) {
        famobi.log ("\n\n\n\n\n\n\n********* ontimeout :"+Name+"\n\n\n\n\n\n\n");
        };
        */
    xmlhttp.open("GET", "datas/bonelab/" + Name + v222, true);
    xmlhttp.send();
}
var dlg_keyboard_on_screen = 0;
var v8 = "";
var v60 = 0;
var v82 = 0;
var v212 = 0;
var v213 = 0;
var v49 = 0;
var v282 = [];
var v112 = _Tx(224)

function f209(id, Char) {
    this.Sprite = id;
    this.Char = Char;
}

function f186() {
    if (v49 != 0) return;
    var x = 0,
        y = 1;
    var currentSprite = 0;
    for (var i = 0; i < 90; i++) {
        f251(100 + currentSprite, 0, x, y, x + 41, y + 41);
        if (currentSprite == 85) {
            f251(100 + currentSprite, 0, x, y, x + 41 + 43, y + 41);
            x += 43;
        }
        if (currentSprite == 86) {
            f251(100 + currentSprite, 0, x, y, x + 41 + 43, y + 41);
            x += 43;
        }
        currentSprite++;
        x += 43;
        if (x > 510) {
            x = 0;
            y += 43;
        }
    }
    v282 = [];
    var CurrentID = 0;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "a");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "b");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "c");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "d");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "e");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "f");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "g");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "h");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "i");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "j");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "k");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "l");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "m");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "n");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "o");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "p");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "q");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "r");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "s");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "t");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "u");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "v");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "w");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "x");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "y");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "z");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "A");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "B");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "C");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "D");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "E");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "F");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "G");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "H");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "I");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "J");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "K");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "L");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "M");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "N");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "O");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "P");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "Q");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "R");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "S");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "T");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "U");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "V");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "W");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "X");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "Y");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "Z");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "0");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "1");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "2");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "3");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "4");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "5");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "6");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "7");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "8");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "9");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "-");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "/");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, ":");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, ";");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "(");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, ")");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "$");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "_");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "%");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "&");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "@");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "#");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, ".");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, ",");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "?");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "!");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "'");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, '"');
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, " ");
    CurrentID++;
    v282.push;
    v282[CurrentID] = new f209(CurrentID, "*");
    CurrentID++;
    var userLang = f32();
    if (userLang.search("fr") != -1) v112 = _Tx(225)
    if (userLang.search("de") != -1) v112 = _Tx(226)
    dlg_keyboard_on_screen = 0;
    v49 = 1;
}
var v179 = 30;
var v180 = 30;
var v61 = 0;
var v283 = 0;
var v83 = 0;

function f141(x, y, value) {
    var SpecialKeyID = 83;
    f181(0.35, 0.35, 0.35, 1.0);
    if (value < 0 || value > 86) f181(0.2, 0.2, 0.2, 1.0);
    if (value == -10 && v283 == 0) f181(0.2, 0.2, 0.2, 1.0);
    if (value == -10 && v283 == 1) f181(0.5, 0.5, 0.5, 1.0);
    if (value == -11 && v283 != 2) f181(0.2, 0.2, 0.2, 1.0);
    if (value == -11 && v283 == 2) f181(0.5, 0.5, 0.5, 1.0);
    var KeyPushed = 0;
    if (v60 == 1 && v212 > x - v179 && v212 < x + v179 && v213 > y - v180 && v213 < y + v180) KeyPushed = 1;
    if (value > -1) {
        if (v82 == 1 && KeyPushed == 1) {
            var CharToDisplay = v112[value];
            v8 = v8 + "" + CharToDisplay;
            if (v283 == 1) v283 = 0;
        }
    }
    if (value == -10) {
        if (v82 == 1 && KeyPushed == 1) {
            v283 = 1 - v283;
        }
        SpecialKeyID = 82 - v283;
    }
    if (value == -11) {
        if (v82 == 1 && KeyPushed == 1 && v283 == 2) v283 = 0;
        else
        if (v82 == 1 && KeyPushed == 1 && v283 != 2) v283 = 2;
        if (v283 != 2) SpecialKeyID = 85;
        else SpecialKeyID = 86;
    }
    if (value == -12) {
        if (v82 == 1 && KeyPushed == 1) {
            v8 = "";
            v259 = 8;
        }
        SpecialKeyID = 83;
    }
    if (value == -13) {
        if (v82 == 1 && KeyPushed == 1) {
            v8 = "";
            v259 = 13;
            dlg_keyboard_on_screen = 0;
        }
        SpecialKeyID = 84;
    }
    if (value == -14) {
        if (v82 == 1 && KeyPushed == 1) {
            v8 = "";
            v259 = 13;
            dlg_keyboard_on_screen = 0;
        }
        SpecialKeyID = 87;
    }
    f183(x - v179 + 1, y - v83, x + v179 - 1, y + v83);
    f183(x - v179, y - v83 + 1, x + v179, y + v83 - 1);
    f228(2);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    if (value < 0) f95(100 + SpecialKeyID, x, y, v61 / 30);
    if (value > -1) {
        var CharToDisplay = v112[value];
        var SpriteID = 0;
        for (var i = 0; i < v282.length; i++) {
            if (v282[i].Char == CharToDisplay) {
                SpriteID = i;
                break;
            }
        }
        if (v283 > 0) y += 2;
        f95(100 + SpriteID, x, y, v61 / 30);
        if (v283 > 0) y -= 2;
    }
    f228(3);
    if (KeyPushed == 1) {
        f181(1.0, 0.5, 0.0, 0.8);
        f183(x - v179 - 1, y - v83 - 1, x + v179 + 1, y + v83 + 1);
    }
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.BLEND);
}
var v143 = 0;
var v113 = 0;

function f187() {
    if (v49 == 0) return;
    if (dlg_keyboard_on_screen == 0) {
        v143 = 0;
        v82 = -1;
        return;
    }
    if (v100 == 0) {
        dlg_keyboard_on_screen = 0;
        return;
    }
    v113 = 350;
    if (v204 > 700) v113 = 300;
    var KeySpace = 5;
    if (v204 < 850) KeySpace = 2;
    if (v204 < 600) KeySpace = 1;
    if (v143 == 1) {
        if (v82 == 1) v82 = -1;
        if (v82 == -1 && v60 == 0) v82 = 0;
        if (v82 == 0 && v60 == 1) v82 = 1;
        if (v213 < v113 && v82 == 1) {
            dlg_keyboard_on_screen = 0;
            TextField_Selected = -1
        }
    }
    f204();
    f228(3);
    if (v143 < 1) {
        v143 += v260 * 0.006;
        if (v143 > 1) v143 = 1;
        f231(0, v113 - v113 * v143, 0);
    }
    f181(0.0, 0.0, 0.0, 0.1);
    f183(0, v113, v204, v113 - 2);
    f183(0, v113, v204, v113 - 4);
    f183(0, v113, v204, v113 - 6);
    f183(0, v113, v204, v113 - 8);
    f183(0, v113, v204, v113 - 10);
    gl.disable(gl.BLEND);
    f181(0.1, 0.1, 0.1, 0.0);
    f183(0, v113, v204, 700);
    var KeyToDisplay = 0;
    if (v283 == 1) KeyToDisplay = 29;
    if (v283 == 2) KeyToDisplay = 58;
    v179 = (v204 - KeySpace * 11) / 10 * 0.5;
    v180 = (700 - v113) / 8.0 - 3.5;
    v61 = v179;
    if (v179 > v180) v61 = v180;
    v83 = v180;
    if (v83 > v179 * 1.5) v83 = v179 * 1.5;
    var KeyPosX = v179 + KeySpace;
    var KeyPosY = v113 + v180 + 5;
    for (var i = 0; i < 10; i++) {
        f141(KeyPosX, KeyPosY, KeyToDisplay);
        KeyToDisplay++;
        KeyPosX += v179 * 2.0 + KeySpace;
    }
    v179 = (v204 - KeySpace * 11) / 11 * 0.5;
    KeyPosX = v179 * 2.0 + KeySpace;
    KeyPosY += v180 * 2.0 + 5;
    for (var i = 0; i < 10; i++) {
        f141(KeyPosX, KeyPosY, KeyToDisplay);
        KeyToDisplay++;
        KeyPosX += v179 * 2.0 + KeySpace;
    }
    v179 = (v204 - KeySpace * 11) / 11 * 0.5;
    v179 *= 1.25;
    KeyPosX = v179 * 1.0 + KeySpace;
    KeyPosY += v180 * 2.0 + 5;
    if (v283 < 2) f141(KeyPosX, KeyPosY, -10);
    v179 /= 1.25;
    KeyPosX += v179 * 2.25 + KeySpace;
    for (var i = 0; i < 8; i++) {
        f141(KeyPosX, KeyPosY, KeyToDisplay);
        KeyToDisplay++;
        KeyPosX += v179 * 2.0 + KeySpace;
    }
    KeyPosX -= v179 + KeySpace;
    KeyPosX = (v204 + KeyPosX) * 0.5;
    v179 = (v204 - KeyPosX) - KeySpace;
    f141(KeyPosX, KeyPosY, -12);
    v179 = v204 / 13 * 0.5;
    v179 *= 2.0;
    KeyPosY += v180 * 2.0 + 5;
    f141(v179 + KeySpace, KeyPosY, -11);
    f141(v204 - v179 - KeySpace, KeyPosY, -14);
    v179 = (v204 * 0.5 - KeySpace * 2) - v179 * 2.0;
    f141(v204 * 0.5, KeyPosY, 87);
}
var GLFontTexture;
var v319 = new Array();
var v248 = 0;

function f242() {
    this.Exist = 0;
    this.uvStart_X = 0;
    this.uvStart_Y = 0;
    this.uvEnd_X = 0;
    this.uvEnd_Y = 0;
    this.size_X = 0;
    this.size_Y = 0;
    this.xOffset = 0;
    this.yOffset = 0;
    this.xAdvance = 0;
    this.VertexPositionBuffer;
    this.TextureCoordBuffer;
    this.VertexIndexBuffer;
}

function f254() {
    var i;
    for (i = 0; i < 8800; i++) {
        v319.push;
        v319[i] = new f242();
    }
}

function f85(charId) {
    v319[charId].VertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v319[charId].VertexPositionBuffer);
    vertices =
        [
            v319[charId].xOffset, v319[charId].yOffset + v319[charId].size_Y, -0.25,
            v319[charId].xOffset + v319[charId].size_X, v319[charId].yOffset + v319[charId].size_Y, -0.25,
            v319[charId].xOffset + v319[charId].size_X, v319[charId].yOffset, -0.25,
            v319[charId].xOffset, v319[charId].yOffset, -0.25,
        ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    v319[charId].VertexPositionBuffer.itemSize = 3;
    v319[charId].VertexPositionBuffer.numItems = 4;
    v319[charId].VertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, v319[charId].VertexTextureCoordBuffer);
    var textureCoords = [
        v319[charId].uvStart_X, v319[charId].uvEnd_Y,
        v319[charId].uvEnd_X, v319[charId].uvEnd_Y,
        v319[charId].uvEnd_X, v319[charId].uvStart_Y,
        v319[charId].uvStart_X, v319[charId].uvStart_Y,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    v319[charId].VertexTextureCoordBuffer.itemSize = 2;
    v319[charId].VertexTextureCoordBuffer.numItems = 4;
    v319[charId].VertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v319[charId].VertexIndexBuffer);
    var sVertexIndices = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sVertexIndices), gl.STATIC_DRAW);
    v319[charId].VertexIndexBuffer.itemSize = 1;
    v319[charId].VertexIndexBuffer.numItems = 6;
}

function f71(Str, StringToFind, TempArray) {
    var n = Str.indexOf(StringToFind)
    if (n == 0) {
        var StartPos = StringToFind.length;
        var DoubleFloatString = Str.substring(StartPos, Str.length - 1);
        DoubleFloatString = DoubleFloatString.replace("(", "");
        DoubleFloatString = DoubleFloatString.replace(")", "");
        DoubleFloatString = DoubleFloatString.replace(" ", "");
        var OneFloat = DoubleFloatString.split(",");
        var numberArray = new Array();
        TempArray[0] = parseFloat(OneFloat[0]);
        TempArray[1] = parseFloat(OneFloat[1]);
        return 1;
    }
    return -1;
}

function f125(Str, StringToFind) {
    var n = Str.indexOf(StringToFind)
    if (n == 0) {
        var StartPos = StringToFind.length;
        var numberString = Str.substring(StartPos, Str.length - 1);
        return parseInt(numberString);
    }
    return -1;
}

function f39() {
    var userLang = f32();
    if (userLang.search("fr") != -1) return 0;
    if (userLang.search("de") != -1) return 0;
    if (userLang.search("en") != -1) return 0;
    return 1;
}

function f281() {
    var FontScale = 1.0;
    var font_name = "font";
    if (f39() == 1) {
        font_name = _Tx(230);
        FontScale = 0.7;
    }
    var xmlhttp;
    famobi.log(_Tx(231));
    GLFontTexture = f160(-1, _Tx(232) + font_name + ".png")
    f254();
    var TempArray = new Array();
    TempArray.push;
    TempArray.push;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            var str = xmlhttp.responseText;
            var LineCount = 0;
            var OneLine = str.split("#");
            var i;
            if (OneLine.length < 3) return;
            var Currentv319 = 0;
            for (i = 9; i < OneLine.length; i += 7) {
                var charId = f125(OneLine[i], _Tx(233));
                if (charId != -1) {
                    Currentv319 = charId;
                    v319[Currentv319].Exist = 1;
                    var uvStart = f71(OneLine[i + 1], _Tx(234), TempArray);
                    v319[Currentv319].uvStart_X = TempArray[0];
                    v319[Currentv319].uvStart_Y = 1.0 - TempArray[1];
                    f71(OneLine[i + 2], _Tx(235), TempArray);
                    v319[Currentv319].uvEnd_X = TempArray[0];
                    v319[Currentv319].uvEnd_Y = 1.0 - TempArray[1];
                    f71(OneLine[i + 3], "size=", TempArray);
                    v319[Currentv319].size_X = TempArray[0] * FontScale;
                    v319[Currentv319].size_Y = TempArray[1];
                    var xOffset = f125(OneLine[i + 4], _Tx(236));
                    v319[Currentv319].xOffset = xOffset * FontScale;
                    var yOffset = f125(OneLine[i + 5], _Tx(237));
                    v319[Currentv319].yOffset = yOffset;
                    var xAdvance = f125(OneLine[i + 6], _Tx(238));
                    v319[Currentv319].xAdvance = xAdvance * FontScale - 3;
                    f85(charId);
                }
            }
            v248++;
        }
    }
    xmlhttp.open("GET", _Tx(240) + font_name + ".fnt" + v222, true);
    xmlhttp.send();
}

function f210(ID) {
    if (v319[ID].Exist == 0 || ID > 2048) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, v319[ID].VertexPositionBuffer);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v319[ID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v319[ID].VertexTextureCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, v319[ID].VertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v319[ID].VertexIndexBuffer);
    f13(1);
    gl.drawElements(gl.TRIANGLES, v319[ID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    f231(v319[ID].xAdvance, 0.0, 0.0);
    v99 += 2;
}
var v284 = 0;
var v249 = 1;
var FontRight = 2;
var v250 = 0;

function f282(align) {
    v250 = align;
}

function f255(FilterID) {
    if (FilterID == 8217) return 39;
    return FilterID;
}

function f211(str) {
    var FontDecal = 0;
    for (var i = 0; i < str.length; i++) {
        FontDecal += v319[f255(str.charCodeAt(i))].xAdvance;
    }
    return FontDecal;
}

function f212(str) {
    if (v248 == 0) return 0;
    var FontDecal = 0;
    if (v250 > 0) {
        FontDecal = -f211(str);
        if (v250 == v249) FontDecal *= 0.5;
    }
    PrevTexture = -1;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, GLFontTexture);
    f203()
    f231(FontDecal, 0, 0);
    for (var i = 0; i < str.length; i++) {
        f210(f255(str.charCodeAt(i)));
    }
    f230();
    return FontDecal;
}
var TextField_Selected = -1;
var v62 = 0;
var v214 = "qwertyuiopasdfghjkl.zxcvbnm!?QWERTYUIOPASDFGHJKL,ZXCVBNM:;0123456789&-/:;()$_%@#.,?!-/. ";
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

function f256(Texte) {
    for (var j = 0; j < v214.length; j++) {
        if (Texte == v214[j]) return 1;
    }
    return 0;
}

function f283(Texte) {
    for (var i = 0; i < Texte.length; i++) {
        var IsGood = 0;
        for (var j = 0; j < v214.length; j++) {
            if (Texte[i] == v214[j]) {
                IsGood = 1;
                break;
            }
        }
        if (IsGood == 0)
            Texte = Texte.replaceAt(i, "_");
    }
    return Texte;
}

function f167(FieldID, Text, PosX, PosY, infoID) {
    if (TextField_Selected != FieldID && v197 == 1 && v303 > PosX - 255 && v303 < PosX + 255 && v304 > PosY - 5 && v304 < PosY + 75) {
        TextField_Selected = FieldID
        v8 = "";
        dlg_keyboard_on_screen = 1;
    }
    if (TextField_Selected != -1) {}
    f228(3);
    if (TextField_Selected == FieldID) {
        f181(1.0, 1.0, 1.0, 0.8);
        f183(PosX - 255, PosY - 5,
            PosX + 255, PosY + 75);
    }
    f181(0.0, 0.0, 0.0, 1.0);
    f183(PosX - 250, PosY,
        PosX + 250, PosY + 70);
    f228(2);
    f181(1.5, 1.5, 1.5, 1.0);
    f203();
    f231(PosX - 255 + 10, PosY - 4, 0);
    f299(0.7, 0.7, 1.0);
    f282(v284);
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v101);
    f230();
    if (TextField_Selected == FieldID) {
        if (v198 == 0) {
            var CursorPos = PosX - 235 + f211(v101) * 0.7;
            f228(3);
            f181(1.0, 1.0, 1.0, 0.8);
            f183(CursorPos, PosY + 2, CursorPos + 40, PosY + 68);
            f228(2);
        }
        if (MouseClick == 1)
            if (v303 < PosX - 255 || v303 > PosX + 255 || v304 < PosY - 5 || v304 > PosY + 75) {
                TextField_Selected = -1;
                dlg_keyboard_on_screen = 0;
            }
        if (v259 == 16 || v259 == 20 || v259 == 18 || v259 == 91) {
            v8 = "";
            v259 = 0;
        } else
        if (v259 == 13 || v259 == 9) {
            TextField_Selected = -1;
            dlg_keyboard_on_screen = 0;
            v259 = -1;
        } else
        if (v259 == 8 || v259 == 46) {
            v259 = 0;
            if (Text.length > 0) Text = Text.substring(0, Text.length - 1);
            Text = f283(Text);
            v8 = "";
        } else
        if (v8.length > 0) {
            for (var j = 0; j < v8.length; j++) {
                famobi.log(_Tx(243) + v8[j]);
                Text += v8[j];
            }
            v8 = "";
            if (Text.length > 15) Text = Text.substring(0, 15);
            Text = f283(Text);
        }
    }
    if (infoID != -1) {
        f228(2);
        if (TextField_Selected == FieldID) f181(1.5, 1.5, 1.5, 1.0);
        else f181(1.0, 1.0, 1.0, 0.5);
        f203();
        f231(PosX - 255 + 10, PosY - 45, 0);
        f299(0.45, 0.45, 1.0);
        f282(v284);
        f212(v289[infoID]);
        f230();
    }
    return Text;
}
var v63 = 0;
var v215 = new Array();
var v285 = "";
var v32 = 0;
var v144;
var v84 = 0;

function f257() {
    famobi.log(_Tx(245));
    if (f305() == 1 && f306() == 1 && f292() == 0) {
        v84 = 1;
    }
    if (f306() == 1 || f271() == 1) v32 = 1;
    v63 = 1;
    /*
    if (f271()==1)
    {
    v63=0; return;
    }
    */
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        v144 = new AudioContext();
    } catch (e) {
        v63 = 0;
        return;
    }
    var myTempAudio = document.createElement('audio');
    if (myTempAudio.canPlayType(_Tx(247))) {
        v285 = "mp3";
        famobi.log(_Tx(248) + v285);
        return;
    } else
    if (myTempAudio.canPlayType(_Tx(249))) {
        v285 = "ogg";
        famobi.log("Sound: ext:" + v285);
        return;
    } else
    if (myTempAudio.canPlayType(_Tx(250))) {
        v285 = "mp4";
        famobi.log("Sound: ext:" + v285);
        return;
    }
    v63 = 0;
}

function f304() {}

function f258(ID, SoundPath) {
    if (v63 == 0) return;
    DataToDownload++;
    v74++;
    var Path = SoundPath.replace("snd", v285) + v222;
    var request = new XMLHttpRequest();
    request.open('GET', Path, true);
    request.responseType = _Tx(252);
    famobi.log(_Tx(253) + Path);
    request.onload = function() {
        v144.decodeAudioData(request.response,
            function(buffer) {
                v215.push = null;
                v215[ID] = buffer;
                DataToDownload--;
                v74--;
            }, f304);
    }
    request.send();
}
var v85 = 1.0;

function f142(Vol) {
    v85 = Vol;
}
var v181 = [null, null, null, null, null, null, null, null, null, null, null, null, null];
var v114 = [null, null, null, null, null, null, null, null, null, null, null, null, null];

function f102(SoundID) {
    if (v181[SoundID] != null) {
        v181[SoundID].stop ? v181[SoundID].stop(0) : v181[SoundID].noteOff(0);
        v181[SoundID].disconect;
        v181[SoundID] = null;
    }
    if (v114[SoundID] != null) {
        v114[SoundID].disconect;
        v114[SoundID] = null;
    }
}

function f40(SoundID, ThisVolume) {
    if (v181[SoundID] == null) return;
    v114[SoundID].gain.value = Pref_User_Sound == 0 ? 0 : ThisVolume;
}

function f126(SoundID, ID, ThisVolume, isLooped) {

    if (v63 == 0 || Pref_User_Sound == 0) return;
    if (v181[SoundID] == null) {
        v181[SoundID] = v144.createBufferSource();
        if (v181[SoundID] == null) return;
    }
    if (v114[SoundID] == null) {
        v114[SoundID] = v144.createGain();
    }
    v181[SoundID].buffer = v215[ID];
    v181[SoundID].loop = isLooped;
    v114[SoundID].gain.value = ThisVolume;
    v181[SoundID].connect(v114[SoundID]);
    v114[SoundID].connect(v144.destination);
    v181[SoundID].start ? v181[SoundID].start(0) : v181[SoundID].noteOn(0);
}

function f259(ID) {
    if (v63 == 0 || Pref_User_Sound == 0) return;
    var source = v144.createBufferSource();
    if (source == null) return;
    source.buffer = v215[ID];
    var volumeNode = v144.createGain();
    volumeNode.gain.value = v85;
    source.connect(volumeNode);
    volumeNode.connect(v144.destination);
    source.start ? source.start(0) : source.noteOn(0);
}
var v216 = null;

function f260() {
    if (v63 == 0) return;
}

function f261(ID) {
    if (v63 == 0 || v216 == null) return;
    v216.stop ? v216.stop(0) : v216.noteOff(0);
    v216 = null;
}

function f262(ID) {
    if (v63 == 0 || v76 == 0) return;
    f261(1);
    v216 = v144.createBufferSource();
    if (ID == 1) v216.buffer = v215[4];
    if (ID == 2) v216.buffer = v215[5];
    v216.loop = true;
    v216.connect(v144.destination);
    v216.start ? v216.start(0) : v216.noteOn(0);
}
var v297 = null;
var v145 = null;

function f143() {
    if (v63 == 0) return;
    if (v297 != null && v297.id == _Tx(254)) {
        v297.muted = true;
    }
}
var v14 = null;
var v0 = 0;

function f144(path) {
    if (path == -1 && v14 != null) path = v14;
    if (path.length > 2) v14 = path;
    if (v63 == 0) return;
    if (v297 != null && v297.id == "MusicStreamPlayer") {
        v297.pause();
        v297.currentTime = 0;
        if (v145 != null) v297.removeChild(v145);
        v145 = null;
    }
    if (v76 == 0) return;
    v297 = document.createElement('audio');
    v297.id = "MusicStreamPlayer";
    v297.preload = 'auto';
    famobi.log(_Tx(255));
    if (v297.canPlayType) {
        famobi.log(_Tx(256));
        var canPlayMp4 = !!v297.canPlayType && "" != v297.canPlayType('audio/mp4');
        var canPlayMp3 = !!v297.canPlayType && "" != v297.canPlayType('audio/mp3');
        var canPlayOgg = !!v297.canPlayType && "" != v297.canPlayType(_Tx(258));
        if (canPlayOgg == true) {
            v145 = document.createElement(_Tx(259));
            v145.type = 'audio/ogg; codecs="vorbis"';
            v145.src = _Tx(260) + path + '.ogg';
            v297.appendChild(v145);
        } else
        if (canPlayMp4 == true && f306() == 1) {
            v145 = document.createElement('source');
            v145.type = 'audio/mp4';
            v145.src = 'datas/musics/' + path + '.m4a';
            v297.appendChild(v145);
        } else
        if (canPlayMp3 == true) {
            v145 = document.createElement('source');
            v145.type = 'audio/mp3';
            v145.src = 'datas/musics/' + path + '.mp3';
            v297.appendChild(v145);
        }
        famobi.log(_Tx(261) + v145.src);
        v297.load();
        v297.muted = false;
        var promise = v297.play();
        if (promise) {
            //Older browsers may not return a promise, according to the MDN website
            promise.catch(function(error) {
                //console.error(error);
            });
        }
        v297.volume = 0.5;
        v0 = 1;
    }
}
window.onbeforeunload = function() {
    if (v297 == null) return;
    v297.pause();
    v297.currentTime = 0;
}
var v115 = 0;
var v217 = 0;
var v146 = 0;
var v147 = 99999999;
var v286 = [];

function f9() {
    v146 = -1;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        /*
            famobi: allow request status zero if file protocol is used
            (usecase iOS UIWebView)
        */
        var protocolRegex = new RegExp('^file:', 'i');
        var isFileProtocol = protocolRegex.test(xmlhttp.responseURL);

        if (xmlhttp.readyState == 4
        && (xmlhttp.status == 200 || isFileProtocol && xmlhttp.status === 0)) {
            var str = xmlhttp.responseText;
            var OneLine = str.split('\n');
            if (OneLine.length < 3) return;
            var TextID = 0;
            for (i = 0; i < OneLine.length; i++) {
                var test_str = OneLine[i];
                var start_pos = test_str.indexOf('"') + 1;
                var end_pos = test_str.indexOf('"', start_pos);
                var text_to_get = test_str.substring(start_pos, end_pos)
                if (text_to_get.length > 4) {
                    v286[TextID] = text_to_get;
                    TextID++;
                }
            }
            v147 = v286.length;
            v146 = 1;
            f53();
        }
    }
    var TimeStamp = new Date().getTime();
    xmlhttp.open("GET", _Tx(262) + TimeStamp, true);
    xmlhttp.send();
}
var v287 = 0;
var v307 = 0;
var v308 = 0;
var v309 = 0;
var v310 = 0;

function f53() {
    if (DataToDownload < 10) {
        var DataPath = v286[v115];
        if (DataPath == null) return;
        v115++;
        var isPNG = DataPath.search(".png");
        var isJPG = DataPath.search(".jpg");
        if (isPNG == DataPath.length - 4 || isJPG == DataPath.length - 4) {
            GLTexture[v287] = f160(v287, "textures/" + DataPath);
            v287++;
        } else
            var isOBJ = DataPath.search(".obj");
        if (isOBJ == DataPath.length - 4) {
            f239(v307, DataPath);
            v307++;
        } else
            var isSND = DataPath.search(".snd");
        if (isSND == DataPath.length - 4) {
            f258(v308, _Tx(264) + DataPath);
            v308++;
        } else
            var isDLB = DataPath.search(".dlb");
        if (isDLB == DataPath.length - 4) {
            f124(v309, DataPath);
            v309++;
        } else
            var isBLA = DataPath.search(".bla");
        if (isBLA == DataPath.length - 4) {
            famobi.log(_Tx(266) + v310 + "] " + isBLA);
            f101(v310, DataPath);
            v310++;
        }
    }
    if (v115 == v147) {
        famobi.log(_Tx(269));
        return;
    }
    setTimeout(function() {
        f53();
    }, 5);
}
var v50 = 1.0;
var v218 = 0;

function f243() {
    if (v217 > 15) {
        f186();
        return 0;
    }
    var Pourcentage = Math.floor((v115 / v147) * 100);
    if (Pourcentage > 99) v217++;
    else v217 = 0;
    if (v146 == 0) f9();
    if (v248 == 0 || v169 > 0) return 1;
    var CirclesCount = 8;
    if (WebGL_Alpha == true) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.colorMask(true, true, true, true);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.clear(gl.COLOR_BUFFER_BIT);
        CirclesCount = 1;
        v50 = 0.0;
    } else {
        gl.colorMask(true, true, true, false);
        gl.clearColor(0.0, 0.2, 0.3, 1.0);
    }
    if (WebGL_ShowLoader == true) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        PrevTexture = -1; {
            f204();
            f228(3);
            var CenterX = v204 * 0.5;
            var CenterY = v176 * 0.5;
            f203();
            f231(CenterX, CenterY, 0);
            f231(0, -15, 0);
            f203();
            f296(v218 + 180, 0, 0, 1);
            for (var i = 0; i < CirclesCount; i++) {
                for (var r = 0; r < 360; r += 10) {
                    if (r > Pourcentage * 3.6) f181(0.0, 0.0, 0.0, 0.5);
                    else f181(v50, v50, v50, 1.0 - i * 0.1);
                    f296(10, 0, 0, 1);
                    f183(-15, -250, 15, -220);
                }
                var Scale = 1.2 - Pourcentage * 0.002;
                f299(Scale, Scale, 1);
            }
            f230();
            f230();
            f231(CenterX, CenterY, 0);
            f181(2.0, 2.0, 2.0, 1.0);
            var PourcenText = Pourcentage + "";
            f299(1.5, 1.5, 1.5);
            if (PourcenText.length == 3) f231(-70, -45, 0);
            else f231(-35, -45, 0);
            for (var i = 0; i < PourcenText.length; i++) {
                f188(PourcenText[i]);
                f231(70, 0, 0);
            }
            v218 += 0.1;
        }
    }
    return 1;
}

function f188(NumberID) {
    var Color = v50;
    if (v219[NumberID][0] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-31, -10, -11, 10);
    if (v219[NumberID][1] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-10, -10, 10, 10);
    if (v219[NumberID][2] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(11, -10, 31, 10);
    if (v219[NumberID][3] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-31, 11, -11, 31);
    if (v219[NumberID][4] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-10, 11, 10, 31);
    if (v219[NumberID][5] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(11, 11, 31, 31);
    if (v219[NumberID][6] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-31, 32, -11, 52);
    if (v219[NumberID][7] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-10, 32, 10, 52);
    if (v219[NumberID][8] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(11, 32, 31, 52);
    if (v219[NumberID][9] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-31, 53, -11, 73);
    if (v219[NumberID][10] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-10, 53, 10, 73);
    if (v219[NumberID][11] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(11, 53, 31, 73);
    if (v219[NumberID][12] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-31, 74, -11, 94);
    if (v219[NumberID][13] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(-10, 74, 10, 94);
    if (v219[NumberID][14] == 1) f181(Color, Color, Color, 1.0);
    else f181(Color, Color, Color, 0.05);
    f183(11, 74, 31, 94);
}
var v219 = [_Tx(270), _Tx(271), _Tx(272), _Tx(273), _Tx(274), _Tx(275), _Tx(276), _Tx(277), _Tx(278), _Tx(279)];
var gl;
var WebGL_canvas;
var v288 = 0;
var WebGL_Alpha = false;
var WebGL_Antialias = false;
var WebGL_ShowLoader = true;
var WebGL_ObjUseJPG = true;
var WebGL_MinScaledSize = 500;
var WebGL_PreMulAlpha = false;
var WebGL_Realv221 = 0;
var WebGL_Realv183 = 0;
var WebGL_Render_Quality = 1.0;
var v221 = 600;
var v183 = 300;

function f213() {
    f111();
    v99 = 0;
    v240 += v260;
    if (v240 > 50) {
        v240 -= 50;
        v239 = 1 - v239;
    }
    v199 += v260;
    if (v199 > 250) {
        v199 -= 250;
        v198 = 1 - v198;
    }
    if (f243() != 0) return;
    f79();
    f221();
}
var fps = 60;

function f72() {
    var timeNow = new Date().getTime();
    var elapsed = timeNow - (v288 || timeNow);
    if (elapsed > 45) elapsed = 45;
    if (elapsed < 0.001) elapsed = 0.001;
    v260 = elapsed;
    requestAnimationFrame(f72);
    f213();
    f187();
    v288 = timeNow;
}

function f54() {
    famobi.log(_Tx(280));
    if (!gl) {
        var names = ["webgl", _Tx(281), _Tx(282), _Tx(283)];
        for (var ii = 0; ii < names.length; ++ii) {
            if (!gl)
                try {
                    gl = WebGL_canvas.getContext(names[ii], {
                        premultipliedalpha: WebGL_PreMulAlpha,
                        antialias: WebGL_Antialias,
                        alpha: WebGL_Alpha,
                        stencil: false,
                        preserveDrawingBuffer: false
                    });
                    gl.viewportWidth = v221;
                    gl.viewportHeight = v183;
                    gl.colorMask(true, true, true, true);
                    famobi.log(_Tx(284) + names[ii]);
                    famobi.log(_Tx(285) + v221 + "x" + v183);
                } catch (e) {}
        }
        if (!gl) {
            document.body.innerHTML = _Tx(286);
            Stanislic_SendInfo(_Tx(287));
        }
    }
}
var v42 = 1;

function f189() {
    v221 = f152();
    v183 = f134();
    WebGL_RealScreenSize = v221 * v42;
    v42 = window.devicePixelRatio || 1;
    if (v100 == 1 && v42 > 1.0) v42 *= 0.7;
    WebGL_canvas.width = v221 * v42 * WebGL_Render_Quality;
    WebGL_canvas.height = v183 * v42 * WebGL_Render_Quality;
    WebGL_Realv221 = WebGL_canvas.width;
    WebGL_Realv183 = WebGL_canvas.height;
    WebGL_canvas.style.width = window.innerWidth + "px";
    WebGL_canvas.style.height = window.innerHeight + "px";
    famobi.log(_Tx(289) + v221 + "x" + v183);
}

function f214() {
    f189()
    if (!gl) return;
    gl.viewportWidth = v221;
    gl.viewportHeight = v183;
}
window.onresize = function() {
    famobi.log(_Tx(290));
    f214();
    WebGL_canvas.focus();
}
window.addEventListener(_Tx(291), function(e) {
    famobi.log(_Tx(292));
    window.setTimeout(function() {
        famobi.log(_Tx(293));
        f214();
        WebGL_canvas.focus();
    }, 800);
});

function DLG_WebGLStart() {
    f306();
    f294();
    f113();
    //f5();
    Stanislic_Start();
    f274();
    WebGL_canvas = document.getElementById(_Tx(294));
    f189();
    f54();
    f57();
    f114();
    f200();
    f281();
    f257();
    f260();
    f81();
    f155();
    f235();
    f207();
    f279();
    f208();
    f185();
    f248();
    f72();
}
var MultiPlayer_Server_IP = _Tx(295);
var v43 = 0;
var v88 = 600;
var v44 = null;
var v45 = 0;
var v65 = 0;
var v7 = 0;
var v34 = [];
var v46 = [];

function f145(ID, Data, Volatile) {
    this.ID = ID;
    this.Data = Data;
    this.Volatile = Volatile;
    this.VolatileTimer = 0;
}

function f103(UsersTXT) {
    v46 = [];
    famobi.log(_Tx(296) + UsersTXT);
    var OneLine = UsersTXT.split(' ');
    if (OneLine.length < 1) return;
    for (var i = 1; i < OneLine.length; i++) {
        v46.push;
        var id = v46.length;
        var ClientID = OneLine[i].substring(0, 4);
        var ClientData = OneLine[i].substring(4);
        if (ClientData.length < 1) ClientData = 0;
        v46[id] = new f145(ClientID, ClientData, 0);
    }
    v7 = 1;
}

function f168(Data) {
    var n = Data.search("<");
    if (n != -1) return;
    n = Data.search(">");
    if (n != -1) return;
    var CleanData = Data.substring(2);
    var ClientID = CleanData.substring(0, 4);
    CleanData = CleanData.substring(4);
    for (var i = 0; i < v46.length; i++) {
        if (v46[i].ID == ClientID) {
            v46[i].Data = CleanData;
            v7 = 1;
            return;
        }
    }
}

function f86(Data) {
    var n = Data.search("<");
    if (n != -1) return;
    n = Data.search(">");
    if (n != -1) return;
    var CleanData = Data.substring(2);
    var ClientID = CleanData.substring(0, 4);
    CleanData = CleanData.substring(4);
    for (var i = 0; i < v46.length; i++) {
        if (v46[i].ID == ClientID) {
            v46[i].Volatile = CleanData;
            v46[i].VolatileTimer = 20;
            return;
        }
    }
}

function f127(Data) {
    v34.push("" + Data.substring(2));
}

function f55() {
    if (v43 != 3) return;
    v44.send("/d" + v45);
}

function f19(DATA) {
    if (v43 != 3) return;
    v44.send("/v" + DATA);
}

function f29(DATA) {
    if (v43 != 3) return;
    v44.send("/a" + DATA);
}

function f15() {
    if (!window.WebSocket) {
        v43 = -1;
        return;
    }
    v44 = new WebSocket("ws://" + MultiPlayer_Server_IP + ":8080", _Tx(298)); //echo-protocol ?
    v44.onerror = function() {
        famobi.log(_Tx(299));
        v46 = [];
        v7 = 0;
        v43 = -1;
    };
    v44.onclose = function() {
        famobi.log(_Tx(300));
        v46 = [];
        v7 = 0;
        v43 = -1;
    };
    v44.onmessage = function(e) {
        if (typeof e.data === _Tx(301) && e.data.length > 1) {
            var data = e.data.replace("<", "-");
            data = data.replace(">", "-");
            if (data[0] == '/') {
                if (data[1] == 'v') {
                    f86(data);
                } else
                if (data[1] == 'd') {
                    f168(data);
                } else
                if (data[1] == 'a') {
                    f127(data);
                } else
                if (data[1] == 'i') {
                    v65 = data.substring(2);
                    famobi.log(_Tx(303) + v65);
                } else
                if (data[1] == 'c') {
                    v43 = 2;
                    setTimeout(function() {
                        v44.send("/r" + md5(Game_ID_String + v222));
                    }, v88);
                } else
                if (data[1] == 'l') {
                    f103(data);
                    v43 = 3;
                    f55();
                }
            }
        }
    };
}

function f128() {
    v45 = 0;
    v7 = 0;
    v43 = 0;
    v46 = [];
    v34 = [];
    v65 = 0;
    if (v44 != null) {
        v44.onerror = function() {};
        v44.onmessage = function() {};
        v44.onclose = function() {};
        v44.close()
        v44 = null;
    }
}

function f104() {
    f128();
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        /*
            famobi: allow request status zero if file protocol is used
            (usecase iOS UIWebView)
        */
        var protocolRegex = new RegExp('^file:', 'i');
        var isFileProtocol = protocolRegex.test(xmlhttp.responseURL);

        if (xmlhttp.readyState == 4
        && (xmlhttp.status == 200 || isFileProtocol && xmlhttp.status === 0)) {
            var str = xmlhttp.responseText;
            var OneLine = str.split('\n');
            MultiPlayer_Server_IP = OneLine[0];
            v43 = 1;
            setTimeout(function() {
                f15();
            }, v88);
        }
    }
    var TimeStamp = new Date().getTime();
    xmlhttp.open("GET", _Tx(305) + TimeStamp, true);
    xmlhttp.send();
}
var v272Texture = null;

function f105() {
    v272Texture = gl.getExtension(_Tx(306));
}

function f129(ID) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, v271[ID]);
}

function f106(ID) {
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, v271[ID]);
}

function f107(ID) {
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, v271[ID]);
}

function f30(ID) {
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, v272[ID]);
}

function f31(ID) {
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, v272[ID]);
}

function f146(ID) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, v273[ID]);
}

function f169() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}
var v271 = [null, null, null, null, null, null, null, null, null, null];
var v272 = [null, null, null, null, null, null, null, null, null, null];
var v273 = [null, null, null, null, null, null, null, null, null, null];
var v274 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var v275 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function f284(ID, width, height) {
    f105();
    if (v273[ID] != null) {
        gl.deleteTexture(v271[ID]);
        gl.deleteTexture(v272[ID]);
        gl.deleteFramebuffer(v273[ID]);
    }
    v271[ID] = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, v271[ID]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0, gl.RGB, gl.UNSIGNED_BYTE, null);
    if (v272Texture != null) {
        v272[ID] = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, v272[ID]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);
    }
    v273[ID] = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, v273[ID]);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, v271[ID], 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, v272[ID], 0);
    var valid = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    v274[ID] = width;
    v275[ID] = height;
    if (valid == gl.FRAMEBUFFER_COMPLETE) return 1;
    return 0;
}
var Game_ID_String = _Tx(307);
var v222 = _Tx(308);
var v184 = _Tx(309);
var v289 = [
    _Tx(310),
    _Tx(311),
    _Tx(312),
    _Tx(313),
    _Tx(314),
    _Tx(315),
    _Tx(316),
    _Tx(317),
    _Tx(318),
    _Tx(319),
    _Tx(320),
    _Tx(321),
    _Tx(322),
    _Tx(323),
    _Tx(324),
    "BONUS",
    "SCORE",
    _Tx(325),
    "LEVEL",
    _Tx(326),
    _Tx(327),
    "Pts",
    _Tx(328),
    _Tx(329),
];
for (var i = 0; i < v289.length; i++) {
    var help = window.famobi.__("_" + i);
    if (help) {
        v289[i] = help;
    } else {
        famobi.log("no translation found: " + v289[i]);
    }
}
var PlayerBonus = 0;
var PlayerScore = 0;
var PlayerBestScore = 0;
var PlayerMaxLevel = 6;
var PlayerCarID = 1;
var PlayerEnergy = 100;
var PlayerCollectedBags = 0;
var PlayerExploded = 0;
var v119;
var v226;
var v148;
var v186;
var v149;
var v187 = 0;
var Control_Right = 0;
var v151 = 0;
var v188 = 0;
var v276 = 0;
var v251 = 0;
var v120 = 0;
var v227 = 0;
var v277 = 0;
var v252 = 0;
var PlayerCoins = 500;
var v189 = -1;
var v253 = 0;
var v152 = 1;
var v290 = null;
var v66 = 0;
var v190 = 1;
var v90 = 0;
var v91;
var v121;
var v153;
var v154;
var v229;
var v230;
var v311 = 1,
    CHASSIS = 2,
    GROUND = 4,
    OTHER = 8;
var v191;
var WheelsCount;

function f244() {
    this.x;
    this.y;
    this.radius;
    this.Body;
    this.ParentBody;
    this.Constraint = -1;
    this.AutoKill = 0;
}

function f285() {
    this.x;
    this.y;
}

function f238() {
    this.A;
    this.B;
    this.C;
}

function f170() {
    this.Name = "";
    this.ID = "";
    this.Texture = "";
    this.TextureID = "";
}

function f73() {
    this.Pos_X = 0;
    this.Pos_Y = 0;
}

function f286() {
    this.Type = 0;
    this.Size_X = 0;
    this.Size_Y = 0;
    this.Pos_X = 0;
    this.Pos_Y = 0;
    this.Start_X = 0;
    this.Start_Y = 0;
    this.Rot = 0;
    this.MatIDStr = 0;
    this.MatID = 0;
    this.UV_X = 0;
    this.UV_Y = 0;
    this.UV_OffsetX = 0;
    this.UV_OffsetY = 0;
    this.Offset_X = 0;
    this.Offset_Y = 0;
    this.PositionBuffer;
    this.IndexBuffer;
    this.TextureCoordBuffer;
    this.IsStatic = 0;
    this.IsExplosiv = 0;
    this.IsCrunchable = 0;
    this.IsMotor = 0;
    this.IsPlatform = 0;
    this.Sv_ALT = [];
    this.Radius = 100;
    this.PhysicObject = -1;
    this.ExplosiveCounter = 0;
    this.Constraint = -1;
    this.AutoKill = 0;
    this.Background;
}
var v231;
var v155;
var v36;
var v298;
var v92 = 0x0001,
    v300Category = 0x0002,
    TyresCategory = 0x0004;
WallsCategory = 0x0008;

function f147(TextureName) {
    v155.push;
    v155[v36] = new f170();
    v155[v36].Name = TextureName;
    v155[v36].ID = _Tx(330);
    v155[v36].Texture = TextureName;
    GLTexture[100 + v36] = f160((100 + v36), "textures/" + TextureName);
    v36++;
}
var v299 = [0, 0, 0, 0, 0];
var v300;

function f287(ID, TyrePosX, TyrePosY) {
    var TyreSize = 25;
    if (ID == 0) TyrePosX += 18;
    else TyrePosX -= 18;
    var BodyMass = 0.5;
    var BodyVelo = 0;
    var boxShape = new p2.Circle({
        radius: TyreSize * 0.5
    });
    v299[ID] = new p2.Body({
        mass: BodyMass,
        position: [TyrePosX, TyrePosY],
        angularVelocity: BodyVelo,
        angle: 0,
        id: 1002 + ID,
        allowSleep: false,
    });
    boxShape.material = v186;
    boxShape.collisionGroup = v311;
    boxShape.collisionMask = GROUND;
    v299[ID].addShape(boxShape);
    v290.addBody(v299[ID]);
}
var v312;
var v313;
var v314;
var v315;

function f297() {
    v301 = 0;
    v302 = 1000;
    v254 = 0.8;
    v232 = 0;
    v94 = 0;
    var CarPosX = v153;
    var CarPosY = v154 + 15;
    var BodyMass = 0.5;
    v300 = new p2.Body({
        mass: BodyMass,
        position: [0, 0],
        angularVelocity: 0,
        angle: 0,
        id: 1001,
        allowSleep: false,
    });
    var Truc_A_path = [
        [-23.88, -7.54],
        [-24.0, 3.0],
        [-4.86, 3.03],
        [-5.34, 10.78],
        [5.93, 11.45],
        [9.37, 5.06],
        [18.77, 4.98],
        [21.54, 3.29],
        [+22.85, -2.19],
        [+22.61, -9.28],
        [+4.30, -11.29],
        [-4.24, -11.18]
    ];
    v300.fromPolygon(Truc_A_path);
    var Offset_X = v300.position[0];
    var Offset_Y = v300.position[1];
    var shapID;
    for (shapID = 0; shapID < v300.shapes.length; shapID++) {
        v300.shapes[shapID].position[0] += Offset_X;
        v300.shapes[shapID].position[1] += Offset_Y;
        v300.shapes[shapID].material = v119;
        v300.shapes[shapID].collisionGroup = CHASSIS;
        v300.shapes[shapID].collisionMask = GROUND;
    }
    v300.position[0] = CarPosX;
    v300.position[1] = CarPosY;
    v290.addBody(v300);
    f287(0, CarPosX, CarPosY);
    f287(1, CarPosX, CarPosY);
    var stiffness = 10.001;
    v312 = new p2.PrismaticConstraint(v300, v299[1], {
        localAnchorA: [-18, -25],
        localAnchorB: [0, 0.0],
        localAxisA: [0, 1],
        disableRotationalLock: true,
    });
    v313 = new p2.PrismaticConstraint(v300, v299[0], {
        localAnchorA: [18, -25],
        localAnchorB: [0, 0.0],
        localAxisA: [0, 1],
        disableRotationalLock: true,
    });
    v312.setLimits(-6.0, 6.2);
    v313.setLimits(-6.0, 6.2);
    v290.addConstraint(v312);
    v290.addConstraint(v313);
    v314 = new p2.LinearSpring(v300, v299[0], {
        restLength: 0,
        stiffness: 0.6,
        localAnchorA: [18, -28],
        localAnchorB: [0, 0],
    });
    v290.addSpring(v314);
    v315 = new p2.LinearSpring(v300, v299[1], {
        restLength: 0,
        stiffness: 0.6,
        localAnchorA: [-18, -28],
        localAnchorB: [0, 0],
    });
    v290.addSpring(v315);
}

function f215(Body, Name) {}
var v5 = [];
var v10 = [];
var v27 = [];
var v37;
var v67;
var v38 = -1;
var v156;
var v291;

function f171() {
    var LevelScale = 0.1;
    v231 = [];
    v155 = [];
    SceneWheels = [];
    v291 = [];
    WheelsCount = 0;
    v156 = 0;
    v36 = 0;
    v298 = 1;
    var OneLine = v91.split('\n');
    var TextID = 0;
    for (var i = 0; i < OneLine.length; i++) {
        var MatPos = OneLine[i].search(_Tx(332));
        if (MatPos != -1) {
            v155.push;
            v155[v36] = new f170();
            v155[v36].Name = OneLine[i].replace(_Tx(333), '');
            v155[v36].ID = OneLine[i + 1].replace('ID: ', '');
            v155[v36].Texture = OneLine[i + 2].replace('Tex: ', '');
            v155[v36].Texture = v155[v36].Texture.replace(".psd", ".png");
            GLTexture[100 + v36] = f160((100 + v36), "textures/" + v155[v36].Texture);
            i += 2;
            v36++;
        }
        var GoldBagObjPos = OneLine[i].search(_Tx(335));
        if (GoldBagObjPos != -1) {
            v291.push;
            v291[v156] = new f73();
            v291[v156].x = parseFloat(OneLine[i + 1].replace(_Tx(337), '')) * LevelScale;
            v291[v156].y = parseFloat(OneLine[i + 2].replace(_Tx(338), '')) * LevelScale;
            v156++;
        }
        var WheelObjPos = OneLine[i].search(_Tx(339));
        if (WheelObjPos != -1) {
            var Name = OneLine[i].replace(_Tx(340), '');
            SceneWheels.push;
            SceneWheels[WheelsCount] = new f244();
            SceneWheels[WheelsCount].Radius = parseFloat(OneLine[i + 1].replace(_Tx(341), '')) * LevelScale - 0.5;
            SceneWheels[WheelsCount].x = parseFloat(OneLine[i + 2].replace('PosX: ', '')) * LevelScale;
            SceneWheels[WheelsCount].y = parseFloat(OneLine[i + 3].replace('PosY: ', '')) * LevelScale;
            var BodyMass = 0.15;
            var BodyVelo = 0;
            var boxShape = new p2.Circle({
                radius: SceneWheels[WheelsCount].Radius
            });
            var WheelBody = new p2.Body({
                mass: BodyMass,
                position: [SceneWheels[WheelsCount].x, SceneWheels[WheelsCount].y],
                angularVelocity: 0,
                angle: 0,
                id: 2000 + WheelsCount,
                allowSleep: true,
            });
            boxShape.material = v186;
            boxShape.collisionGroup = GROUND;
            boxShape.collisionMask = GROUND | CHASSIS;
            WheelBody.addShape(boxShape);
            v290.addBody(WheelBody);
            SceneWheels[WheelsCount].Body = WheelBody;
            SceneWheels[WheelsCount].ParentBody = v67;
            v290.disableBodyCollision(WheelBody, v67);
            var constraint = new p2.RevoluteConstraint(WheelBody, v67, {
                worldPivot: [WheelBody.position[0], WheelBody.position[1]]
            });
            v290.addConstraint(constraint);
            SceneWheels[WheelsCount].Constraint = constraint;
            WheelsCount++;
        }
        var PolyObjPos = OneLine[i].search(_Tx(342));
        if (PolyObjPos != -1) {
            v231.push;
            v231[v298] = new f286();
            v231[v298].Name = OneLine[i].replace(_Tx(343), '');
            v231[v298].Size_X = parseFloat(OneLine[i + 1].replace(_Tx(344), '')) * LevelScale;
            v231[v298].Size_Y = parseFloat(OneLine[i + 2].replace(_Tx(345), '')) * LevelScale;
            v231[v298].Pos_X = parseFloat(OneLine[i + 3].replace('PosX: ', ''));
            v231[v298].Pos_Y = parseFloat(OneLine[i + 4].replace('PosY: ', ''));
            v231[v298].Rot = parseFloat(OneLine[i + 5].replace('Rot: ', ''));
            var TrianglesCount = parseInt(OneLine[i + 6].replace('Tri: ', ''));
            var VertexCount = parseInt(OneLine[i + 7].replace(_Tx(346), ''));
            v231[v298].MatIDStr = OneLine[i + 8].replace('Mat: ', '');
            v231[v298].UV_X = parseFloat(OneLine[i + 9].replace('UVx: ', ''));
            v231[v298].UV_Y = parseFloat(OneLine[i + 10].replace('UVy: ', ''));
            var Obj_UVsA = [];
            var Obj_UVsB = [];
            var Obj_UVsC = [];
            var Current_UV = 0;
            var Obj_Vec = [];
            var Current_Vec = 0;
            var Obj_Index = [];
            var Current_Index = 0;
            var Current_Path = 0;
            var Current_Alt_Path = 0;
            var PathArray = [];
            while (OneLine[i].search("PolyEnd") == -1) {
                i++;
                if (OneLine[i].search("Uv: ") != -1) {
                    var OneUVLine = OneLine[i].replace('Uv: ', '');
                    var UVliste = OneUVLine.split(" ");
                    Obj_UVsA.push;
                    Obj_UVsA[Current_UV] = new f285();
                    Obj_UVsA[Current_UV].x = parseFloat(UVliste[0]) * v231[v298].UV_X;
                    Obj_UVsA[Current_UV].y = parseFloat(UVliste[1]) * v231[v298].UV_Y;
                    Obj_UVsB.push;
                    Obj_UVsB[Current_UV] = new f285();
                    Obj_UVsB[Current_UV].x = parseFloat(UVliste[2]) * v231[v298].UV_X;
                    Obj_UVsB[Current_UV].y = parseFloat(UVliste[3]) * v231[v298].UV_Y;
                    Obj_UVsC.push;
                    Obj_UVsC[Current_UV] = new f285();
                    Obj_UVsC[Current_UV].x = parseFloat(UVliste[4]) * v231[v298].UV_X;
                    Obj_UVsC[Current_UV].y = parseFloat(UVliste[5]) * v231[v298].UV_Y;
                    Current_UV++;
                }
                if (OneLine[i].search("V: ") != -1) {
                    var OneVecLine = OneLine[i].replace('V: ', '');
                    var Vecliste = OneVecLine.split(" ");
                    Obj_Vec.push;
                    Obj_Vec[Current_Vec] = new f285();
                    Obj_Vec[Current_Vec].x = (parseFloat(Vecliste[0])) * LevelScale;
                    Obj_Vec[Current_Vec].y = (parseFloat(Vecliste[1])) * LevelScale;
                    Current_Vec++;
                }
                if (OneLine[i].search("I: ") != -1) {
                    var OneIndexLine = OneLine[i].replace('I: ', '');
                    var Indexliste = OneIndexLine.split(" ");
                    Obj_Index.push;
                    Obj_Index[Current_Index] = new f238();
                    Obj_Index[Current_Index].A = parseInt(Indexliste[0]);
                    Obj_Index[Current_Index].B = parseInt(Indexliste[1]);
                    Obj_Index[Current_Index].C = parseInt(Indexliste[2]);
                    Current_Index++;
                }
                if (OneLine[i].search("Sv: ") != -1) {
                    var OnePathLine = OneLine[i].replace('Sv: ', '');
                    var Pathliste = OnePathLine.split(" ");
                    PathArray.push;
                    PathArray[Current_Path] = [parseFloat(Pathliste[0]) * LevelScale, parseFloat(Pathliste[1]) * LevelScale];
                    Current_Path++;
                }
                if (OneLine[i].search(_Tx(351)) != -1) {
                    var OnePathLine = OneLine[i].replace(_Tx(352), '');
                    var Pathliste = OnePathLine.split(" ");
                    v231[v298].Sv_ALT.push;
                    v231[v298].Sv_ALT[Current_Alt_Path] = [parseFloat(Pathliste[0]) * LevelScale, parseFloat(Pathliste[1]) * LevelScale];
                    Current_Alt_Path++;
                }
            }
            var BodyMass = 1;
            var BodyVelo = 0;
            var CanSleep = true;
            var ThisMaterial = v119;
            v231[v298].Background = 0;
            if (v231[v298].Name.search("Rock") != -1) {
                BodyMass = 4;
            }
            if (v231[v298].Name.search("Car") != -1) {
                BodyMass = 1;
            }
            if (v231[v298].Name.search(_Tx(331)) != -1) {
                BodyMass = 0;
                v231[v298].IsStatic = 1;
            }
            if (v231[v298].Name.search(_Tx(354)) != -1) {
                BodyMass = 2.3;
                CanSleep = false;
            }
            if (v231[v298].Name.search("Mud") != -1) {
                ThisMaterial = v226;
            }
            if (v231[v298].Name.search("Grass") != -1) {
                ThisMaterial = v148;
            }
            if (v231[v298].Name.search("Water") != -1) {
                ThisMaterial = v149;
            }
            if (v231[v298].Name.search(_Tx(355)) != -1) {
                BodyMass = 0.4;
                v231[v298].IsExplosiv = 1;
            }
            if (v231[v298].Name.search(_Tx(356)) != -1) {
                v231[v298].IsCrunchable = 1;
            }
            if (v231[v298].Name.search(_Tx(357)) != -1) {
                v231[v298].Background = 1;
                BodyMass = 0;
                v231[v298].IsStatic = 1;
            }
            if (v231[v298].Name.search(_Tx(358)) != -1) {
                BodyVelo = 0;
                BodyMass = 3;
                CanSleep = false;
            }
            if (v231[v298].Name.search("Motor") != -1) {
                v231[v298].IsMotor = 1;
            }
            if (v231[v298].Name.search(_Tx(359)) != -1) {
                v231[v298].IsMotor = 2;
            }
            if (v231[v298].Name.search(_Tx(360)) != -1) {
                v231[v298].IsPlatform = 1;
                BodyVelo = 0;
                BodyMass = 3;
                CanSleep = false;
            }
            if (v231[v298].Name.search(_Tx(361)) != -1) {
                v153 = v231[v298].Pos_X * LevelScale;
                v154 = v231[v298].Pos_Y * LevelScale
            }
            if (v231[v298].Name.search(_Tx(362)) != -1) {
                v229 = v231[v298].Pos_X * LevelScale;
                v230 = v231[v298].Pos_Y * LevelScale;
            }
            var PolyBody = new p2.Body({
                mass: BodyMass,
                position: [0, 0],
                angularVelocity: BodyVelo,
                angle: 0,
                id: v298,
                allowSleep: CanSleep,
                sleepSpeedLimit: 0.2,
                sleepTimeLimit: 1.0
            });
            PolyBody.fromPolygon(PathArray);
            v290.addBody(PolyBody);
            v231[v298].Offset_X = PolyBody.position[0];
            v231[v298].Offset_Y = PolyBody.position[1];
            PolyBody.position[0] = 0;
            PolyBody.position[1] = 0;
            var shapC;
            for (shapC = 0; shapC < PolyBody.shapes.length; shapC++) {
                PolyBody.shapes[shapC].position[0] += v231[v298].Offset_X;
                PolyBody.shapes[shapC].position[1] += v231[v298].Offset_Y;
                PolyBody.shapes[shapC].material = ThisMaterial;
                PolyBody.shapes[shapC].collisionGroup = GROUND;
                PolyBody.shapes[shapC].collisionMask = GROUND | v311 | CHASSIS;
            }
            v231[v298].PhysicObject = PolyBody;
            v231[v298].Radius = 0;
            for (l = 0; l < PolyBody.shapes.length; l++) {
                var child = PolyBody.shapes[l];
                var offset = child.position;
                var angle = child.angle;
                var vrot = p2.vec2.create();
                if (child instanceof p2.Convex) {
                    for (var j = 0; j !== child.vertices.length; j++) {
                        var v = child.vertices[j];
                        p2.vec2.rotate(vrot, v, angle);
                        var Va_X = (vrot[0] + offset[0]);
                        var Va_Y = (vrot[1] + offset[1]);
                        var Radius = Math.sqrt(Math.pow((Va_X), 2) + Math.pow((Va_Y), 2)) - 8;
                        if (v231[v298].Radius < Radius) v231[v298].Radius = Radius;
                    }
                }
            }
            PolyBody.position[0] = v231[v298].Pos_X * LevelScale;
            PolyBody.position[1] = v231[v298].Pos_Y * LevelScale;
            v231[v298].Start_X = PolyBody.position[0];
            v231[v298].Start_Y = PolyBody.position[1];
            var BridgeDistance = 16;
            if (v231[v298].Name.search("UpDown") != -1) {
                var AncoreShape = new p2.Circle({
                    radius: 1
                });
                var AncoreBody = new p2.Body({
                    mass: 0,
                    position: [PolyBody.position[0], PolyBody.position[1] + 10],
                    angularVelocity: 0,
                    angle: 0,
                    id: -1,
                });
                AncoreBody.addShape(AncoreShape);
                v290.addBody(AncoreBody);
                var Spring = new p2.LinearSpring(AncoreBody, PolyBody, {
                    restLength: 0,
                    stiffness: 0.0,
                    localAnchorA: [0, -1500],
                    localAnchorB: [0, 0],
                });
                v290.addSpring(Spring);
                PolyBody.fixedRotation = true;
            }
            /*
            v314=new p2.LinearSpring(v300, v299[0], {
            restLength : 0,
            stiffness : 0.6,
            localAnchorA : [18,-28],
            localAnchorB : [0,0],
            });
            v290.addSpring(v314);
            */
            if (v231[v298].Name.search("PinPoint") != -1) {
                var AncoreShape = new p2.Circle({
                    radius: 1
                });
                var AncoreBody = new p2.Body({
                    mass: 0,
                    position: [PolyBody.position[0], PolyBody.position[1]],
                    angularVelocity: 0,
                    angle: 0,
                    id: -1,
                });
                AncoreBody.addShape(AncoreShape);
                v290.addBody(AncoreBody);
                var constraint = new p2.RevoluteConstraint(AncoreBody, PolyBody, {
                    worldPivot: [PolyBody.position[0], PolyBody.position[1]]
                });
                v290.addConstraint(constraint);
                v231[v298].Constraint = constraint;
            }
            if (v231[v298].Name.search(_Tx(363)) != -1) {
                var AncoreShape = new p2.Circle({
                    radius: 1
                });
                var AncoreBody = new p2.Body({
                    mass: 0,
                    position: [PolyBody.position[0] - BridgeDistance, PolyBody.position[1]],
                    angularVelocity: 0,
                    angle: 0,
                    id: -1,
                });
                AncoreBody.addShape(AncoreShape);
                v290.addBody(AncoreBody);
                var constraint = new p2.RevoluteConstraint(AncoreBody, PolyBody, {
                    worldPivot: [PolyBody.position[0] - BridgeDistance, PolyBody.position[1]]
                });
                v290.addConstraint(constraint);
                v231[v298].Constraint = constraint;
                v37 = AncoreBody;
                v38 = PolyBody;
            }
            if (v231[v298].Name.search(_Tx(365)) != -1) {
                if (v38 != -1) {
                    var constraintRevo = new p2.RevoluteConstraint(v38, PolyBody, {
                        worldPivot: [PolyBody.position[0] - BridgeDistance, PolyBody.position[1]]
                    });
                    v290.addConstraint(constraintRevo);
                    v231[v298].Constraint = constraintRevo;
                }
                v37 = AncoreBody;
                v38 = PolyBody;
            }
            if (v231[v298].Name.search(_Tx(367)) != -1) {
                var constraintRevo = new p2.RevoluteConstraint(v38, PolyBody, {
                    worldPivot: [PolyBody.position[0] - BridgeDistance, PolyBody.position[1]]
                });
                v290.addConstraint(constraintRevo);
                var AncoreShape = new p2.Circle({
                    radius: 1
                });
                var AncoreBody = new p2.Body({
                    mass: 0,
                    position: [PolyBody.position[0] + BridgeDistance, PolyBody.position[1]],
                    angularVelocity: 0,
                    angle: 0,
                    id: -1,
                });
                AncoreBody.addShape(AncoreShape);
                v290.addBody(AncoreBody);
                var constraint = new p2.RevoluteConstraint(AncoreBody, PolyBody, {
                    worldPivot: [PolyBody.position[0] + BridgeDistance, PolyBody.position[1]]
                });
                v290.addConstraint(constraint);
                v231[v298].Constraint = constraintRevo;
                v37 = AncoreBody;
                v38 = -1;
            }
            if (v231[v298].Name.search("Car") != -1) {
                v67 = PolyBody;
            }
            v231[v298].PositionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, v231[v298].PositionBuffer);
            var vertices = [];
            var VertPos = 0;
            for (var k = 0; k < Current_Vec; k++) {
                vertices.push;
                vertices[VertPos] = Obj_Vec[k].x;
                VertPos++;
                vertices.push;
                vertices[VertPos] = Obj_Vec[k].y;
                VertPos++;
                vertices.push;
                vertices[VertPos] = -0.2;
                VertPos++;
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            v231[v298].PositionBuffer.itemSize = 3;
            v231[v298].PositionBuffer.numItems = Current_Vec;
            v231[v298].TextureCoordBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, v231[v298].TextureCoordBuffer);
            var NewUVs = [];
            for (var k = 0; k < Current_Vec; k++) {
                NewUVs.push;
                NewUVs[k] = new f285();
            }
            for (var k = 0; k < Current_Index; k++) {
                NewUVs[Obj_Index[k].A] = Obj_UVsA[k];
                NewUVs[Obj_Index[k].B] = Obj_UVsB[k];
                NewUVs[Obj_Index[k].C] = Obj_UVsC[k];
            }
            var textureCoords = [];
            var TexPos = 0;
            for (var k = 0; k < Current_Vec; k++) {
                textureCoords.push;
                textureCoords[TexPos] = NewUVs[k].x;
                TexPos++;
                textureCoords.push;
                textureCoords[TexPos] = 1.0 - NewUVs[k].y;
                TexPos++;
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
            v231[v298].TextureCoordBuffer.itemSize = 2;
            v231[v298].TextureCoordBuffer.numItems = Current_UV;
            v231[v298].IndexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v231[v298].IndexBuffer);
            var sVertexIndices = [];
            var IndexPos = 0;
            for (var k = 0; k < Current_Index; k++) {
                sVertexIndices.push;
                sVertexIndices[IndexPos] = Obj_Index[k].A;
                IndexPos++;
                sVertexIndices.push;
                sVertexIndices[IndexPos] = Obj_Index[k].B;
                IndexPos++;
                sVertexIndices.push;
                sVertexIndices[IndexPos] = Obj_Index[k].C;
                IndexPos++;
            }
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sVertexIndices), gl.STATIC_DRAW);
            v231[v298].IndexBuffer.itemSize = 1;
            v231[v298].IndexBuffer.numItems = Current_Index * 3;
            for (var j = 0; j < v36; j++) {
                if (v155[j].Name == v231[v298].MatIDStr) {
                    v231[v298].MatID = j;
                    break;
                }
            }
            v298++;
        }
        var PlaneObjPos = OneLine[i].search(_Tx(369));
        if (PlaneObjPos != -1) {
            v231.push;
            v231[v298] = new f286();
            v231[v298].Name = OneLine[i].replace(_Tx(370), '');
            v231[v298].Size_X = parseFloat(OneLine[i + 1].replace('SizeX: ', '')) * LevelScale;
            v231[v298].Size_Y = parseFloat(OneLine[i + 2].replace('SizeY: ', '')) * LevelScale;
            v231[v298].Pos_X = parseFloat(OneLine[i + 3].replace('PosX: ', '')) * LevelScale;
            v231[v298].Pos_Y = parseFloat(OneLine[i + 4].replace('PosY: ', '')) * LevelScale;
            v231[v298].Rot = parseFloat(OneLine[i + 5].replace('Rot: ', ''));
            v231[v298].MatIDStr = OneLine[i + 6].replace('Mat: ', '');
            v231[v298].UV_X = parseFloat(OneLine[i + 7].replace('UVx: ', ''));
            v231[v298].UV_Y = parseFloat(OneLine[i + 8].replace('UVy: ', ''));
            v231[v298].UV_OffsetX = -parseFloat(OneLine[i + 9].replace(_Tx(371), '')) * 0.1182;
            v231[v298].UV_OffsetY = parseFloat(OneLine[i + 10].replace(_Tx(372), '')) * 0.1182;
            v231[v298].PositionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, v231[v298].PositionBuffer);
            var PosX = v231[v298].Pos_X;
            var PosY = v231[v298].Pos_Y;
            var HalfSizeX = v231[v298].Size_X * 0.5;
            var HalfSizeY = v231[v298].Size_Y * 0.5;
            var vertices = [-HalfSizeX, -HalfSizeY, -0.2,
                HalfSizeX, -HalfSizeY, -0.2,
                HalfSizeX, HalfSizeY, -0.2, -HalfSizeX, HalfSizeY, -0.2,
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            v231[v298].PositionBuffer.itemSize = 3;
            v231[v298].PositionBuffer.numItems = 4;
            v231[v298].TextureCoordBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, v231[v298].TextureCoordBuffer);
            var textureCoords = [
                v231[v298].UV_OffsetX, v231[v298].UV_OffsetY + 1.0 - v231[v298].UV_Y,
                v231[v298].UV_OffsetX + v231[v298].UV_X, v231[v298].UV_OffsetY + 1.0 - v231[v298].UV_Y,
                v231[v298].UV_OffsetX + v231[v298].UV_X, v231[v298].UV_OffsetY + 1.0,
                v231[v298].UV_OffsetX, v231[v298].UV_OffsetY + 1.0,
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
            v231[v298].TextureCoordBuffer.itemSize = 2;
            v231[v298].TextureCoordBuffer.numItems = 4;
            v231[v298].IndexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v231[v298].IndexBuffer);
            var sVertexIndices = [0, 1, 2, 0, 2, 3];
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sVertexIndices), gl.STATIC_DRAW);
            v231[v298].IndexBuffer.itemSize = 1;
            v231[v298].IndexBuffer.numItems = 6;
            for (var j = 0; j < v36; j++) {
                if (v155[j].Name == v231[v298].MatIDStr) v231[v298].MatID = j;
            }
            var BodyMass = 1;
            var BodyVelo = 0;
            if (v231[v298].Name.search("Static") != -1) {
                BodyMass = 0;
            }
            var boxShape = new p2.Box({
                width: v231[v298].Size_X,
                height: v231[v298].Size_Y
            });
            boxShape.material = v119;
            boxShape.collisionGroup = GROUND;
            boxShape.collisionMask = GROUND | v311 | CHASSIS;
            var boxBody = new p2.Body({
                mass: BodyMass,
                position: [v231[v298].Pos_X, v231[v298].Pos_Y],
                angularVelocity: BodyVelo,
                angle: v231[v298].Rot,
                id: v298,
                allowSleep: true,
                sleepSpeedLimit: 0.1
            });
            boxBody.addShape(boxShape);
            v290.addBody(boxBody);
            i += 10;
            v298++;
        }
    }
    f297();
    v10 = [];
    v27 = [];
    v5 = [];
    for (var ObjID = 1; ObjID < v298; ObjID++) {
        if (v231[ObjID].IsStatic == 0) {
            v27.push(ObjID);
        } else {
            if (v231[ObjID].Background == 0)
                v10.push(ObjID);
            else
                v5.push(ObjID);
        }
    }
    v90 = 2;
}
var v157;
var v122;

function f190() {
    v90 = 0;
    DataToDownload = 1;
    v290 = new p2.World({
        gravityX: 0,
        gravityY: -6
    });
    v119 = new p2.Material();
    v226 = new p2.Material();
    v148 = new p2.Material();
    v186 = new p2.Material();
    v149 = new p2.Material();
    var frictionContactMaterialWb = new p2.ContactMaterial(v149, v186, {
        friction: 0.0,
        restitution: 0.0,
        frictionRelaxation: 0.000001,
        stiffness: 0.0000001,
    });
    v290.addContactMaterial(frictionContactMaterialWb);
    var frictionContactMaterialWa = new p2.ContactMaterial(v149, v119, {
        friction: 0.0,
        restitution: 0.0,
        frictionRelaxation: 0.000001,
        stiffness: 0.0000001,
    });
    v290.addContactMaterial(frictionContactMaterialWa);
    var frictionContactMaterial = new p2.ContactMaterial(v119, v186, {
        friction: 7.0,
        restitution: 0.0,
    });
    v290.addContactMaterial(frictionContactMaterial);
    var frictionContactMaterialB = new p2.ContactMaterial(v119, v119, {
        friction: 3.0,
        restitution: 0.2,
        frictionRelaxation: 10.0,
    });
    v290.addContactMaterial(frictionContactMaterialB);
    var frictionContactMaterialC = new p2.ContactMaterial(v226, v186, {
        friction: 0.55,
    });
    v290.addContactMaterial(frictionContactMaterialC);
    var frictionContactMaterialD = new p2.ContactMaterial(v226, v119, {
        friction: 0.1,
    });
    v290.addContactMaterial(frictionContactMaterialD);
    var frictionContactMaterialE = new p2.ContactMaterial(v148, v186, {
        friction: 6.0,
        restitution: 0.0,
    });
    v290.addContactMaterial(frictionContactMaterialE);
    var frictionContactMaterialF = new p2.ContactMaterial(v148, v119, {
        friction: 5.0,
        restitution: 0.0,
    });
    v290.addContactMaterial(frictionContactMaterialF);
    v290.sleepMode = p2.World.BODY_SLEEPING;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            v91 = xmlhttp.responseText;
            DataToDownload--;
            v90 = 1;
        }
    }
    xmlhttp.open("GET", _Tx(375) + v190 + ".c4d.txt", true);
    xmlhttp.send();
}

function f263(x, y, Points) {
    PlayerScore += Points;

    window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: PlayerScore});

    var TextureID = 23;
    if (Points == 15) TextureID = 24;
    if (Points == 25) TextureID = 25;
    f61(TextureID);
    f60(0.0, 0);
    f92(2.0, 0.1);
    f62(15, 0.1, 180, 0);
    f45(x, y + 10, -0.2, 0, 1, 0.0);
    f80(true);
    f199();
    if (PlayerBestScore < PlayerScore) PlayerBestScore = PlayerScore;
}
var v301 = 0;
var v302 = 0;
var v254 = 0.8;
var v232 = 0;

function f191(TruckID, IsLocked) {
    var v300position0 = 0;
    var v300position1 = 0;
    var v300angle = 0;
    var v2990position0 = 19;
    var v2991position0 = -19;
    var v2990position1 = -24;
    var v2991position1 = -24;
    var TyreAngle = 0;
    var Link_x, Link_y, Angle, Dist;
    Link_x = (v2990position0 + v2991position0) * 0.5;
    Link_y = (v2990position1 + v2991position1) * 0.5;
    Angle = -f247(v2990position0, v2990position1, v2991position0, v2991position1) - 90;
    f203();
    f231(Link_x, Link_y, 0);
    f296(Angle, 0, 0, 1);
    f138(3, 17, 5, -17, -5);
    f230();
    Link_x = v300position0 + Math.cos(v300angle - 0.4) * 18;
    Link_y = v300position1 + Math.sin(v300angle - 0.4) * 18;
    Angle = -f247(v2990position0, v2990position1, Link_x, Link_y) - 90;
    Dist = Math.sqrt(Math.pow((Link_x - v2990position0), 2) + Math.pow((Link_y - v2990position1), 2)) - 8;
    f203();
    f231(Link_x, Link_y, 0);
    f296(Angle, 0, 0, 1);
    f138(4, 0, -2, Dist, 2);
    f230();
    Link_x = v300position0 + Math.cos(v300angle + 3.5) * 17;
    Link_y = v300position1 + Math.sin(v300angle + 3.5) * 17;
    Angle = -f247(v2991position0, v2991position1, Link_x, Link_y) - 90;
    Dist = Math.sqrt(Math.pow((Link_x - v2991position0), 2) + Math.pow((Link_y - v2991position1), 2)) - 8;
    f203();
    f231(Link_x, Link_y, 0);
    f296(Angle, 0, 0, 1);
    f138(4, 0, -2, Dist, 2);
    f230();
    Link_x = v300position0 + Math.cos(v300angle + 4.4) * 8;
    Link_y = v300position1 + Math.sin(v300angle + 4.4) * 8;
    Angle = -f247(v2991position0, v2991position1, Link_x, Link_y) - 90;
    Dist = Math.sqrt(Math.pow((Link_x - v2991position0), 2) + Math.pow((Link_y - v2991position1), 2)) - 8;
    f203();
    f231(Link_x, Link_y, 0);
    f296(Angle, 0, 0, 1);
    f138(3, 0, -3, 20, 3);
    f230();
    Link_x = v300position0 + Math.cos(v300angle + 5.0) * 8;
    Link_y = v300position1 + Math.sin(v300angle + 5.0) * 8;
    Angle = -f247(v2990position0, v2990position1, Link_x, Link_y) - 90;
    Dist = Math.sqrt(Math.pow((Link_x - v2990position0), 2) + Math.pow((Link_y - v2990position1), 2)) - 8;
    f203();
    f231(Link_x, Link_y, 0);
    f296(Angle, 0, 0, 1);
    f138(3, 0, 3, 20, -3);
    f230();
    f203();
    f231(v300position0, v300position1, 0);
    f296(v300angle * 57.2958, 0, 0, 1);
    if (IsLocked == 0)
        f37(_Tx(376) + (TruckID + 1) + ".png", 5);
    else
        f201(5);
    f138(-1, -25, 12.5, 25, -12.5);
    f230();
    f203();
    f231(v2990position0, v2990position1, 0);
    f203();
    f296(TyreAngle, 0, 0, 1);
    f138(6, -14, 14, 14, -14);
    f230();
    f138(7, -14, 14, 14, -14);
    f230();
    f203();
    f231(v2991position0, v2991position1, 0);
    f203();
    f296(TyreAngle, 0, 0, 1);
    f138(6, -14, 14, 14, -14);
    f230();
    f138(7, -14, 14, 14, -14);
    f230();
}

function f288() {
    var Link_x, Link_y, Angle, Dist;
    if (PlayerExploded == 0) {
        Link_x = (v299[0].position[0] + v299[1].position[0]) * 0.5;
        Link_y = (v299[0].position[1] + v299[1].position[1]) * 0.5;
        Angle = -f247(v299[0].position[0], v299[0].position[1], v299[1].position[0], v299[1].position[1]) - 90;
        f203();
        f231(Link_x, Link_y, 0);
        f296(Angle, 0, 0, 1);
        f138(3, 17, 5, -17, -5);
        f230();
        Link_x = v300.position[0] + Math.cos(v300.angle - 0.4) * 18;
        Link_y = v300.position[1] + Math.sin(v300.angle - 0.4) * 18;
        Angle = -f247(v299[0].position[0], v299[0].position[1], Link_x, Link_y) - 90;
        Dist = Math.sqrt(Math.pow((Link_x - v299[0].position[0]), 2) + Math.pow((Link_y - v299[0].position[1]), 2)) - 8;
        f203();
        f231(Link_x, Link_y, 0);
        f296(Angle, 0, 0, 1);
        f138(4, 0, -2, Dist, 2);
        f230();
        Link_x = v300.position[0] + Math.cos(v300.angle + 3.5) * 17;
        Link_y = v300.position[1] + Math.sin(v300.angle + 3.5) * 17;
        Angle = -f247(v299[1].position[0], v299[1].position[1], Link_x, Link_y) - 90;
        Dist = Math.sqrt(Math.pow((Link_x - v299[1].position[0]), 2) + Math.pow((Link_y - v299[1].position[1]), 2)) - 8;
        f203();
        f231(Link_x, Link_y, 0);
        f296(Angle, 0, 0, 1);
        f138(4, 0, -2, Dist, 2);
        f230();
        Link_x = v300.position[0] + Math.cos(v300.angle + 4.4) * 8;
        Link_y = v300.position[1] + Math.sin(v300.angle + 4.4) * 8;
        Angle = -f247(v299[1].position[0], v299[1].position[1], Link_x, Link_y) - 90;
        Dist = Math.sqrt(Math.pow((Link_x - v299[1].position[0]), 2) + Math.pow((Link_y - v299[1].position[1]), 2)) - 8;
        f203();
        f231(Link_x, Link_y, 0);
        f296(Angle, 0, 0, 1);
        f138(3, 0, -3, 20, 3);
        f230();
        Link_x = v300.position[0] + Math.cos(v300.angle + 5.0) * 8;
        Link_y = v300.position[1] + Math.sin(v300.angle + 5.0) * 8;
        Angle = -f247(v299[0].position[0], v299[0].position[1], Link_x, Link_y) - 90;
        Dist = Math.sqrt(Math.pow((Link_x - v299[0].position[0]), 2) + Math.pow((Link_y - v299[0].position[1]), 2)) - 8;
        f203();
        f231(Link_x, Link_y, 0);
        f296(Angle, 0, 0, 1);
        f138(3, 0, 3, 20, -3);
        f230();
    }
    f203();
    f231(v300.position[0], v300.position[1], 0);
    f296(v300.angle * 57.2958, 0, 0, 1);
    f37("datas/textures/car_body_" + PlayerCarID + ".png", 5);
    f138(-1, -25, 12.5, 25, -12.5);
    f230();
    f203();
    f231(v299[0].position[0], v299[0].position[1], 0);
    f203();
    f296(v299[0].angle * 57.2958, 0, 0, 1);
    f138(6, -14, 14, 14, -14);
    f230();
    f138(7, -14, 14, 14, -14);
    f230();
    f203();
    f231(v299[1].position[0], v299[1].position[1], 0);
    f203();
    f296(v299[1].angle * 57.2958, 0, 0, 1);
    f138(6, -14, 14, 14, -14);
    f230();
    f138(7, -14, 14, 14, -14);
    f230();
}

function f148() {
    f204();
    gl.disable(gl.BLEND);
    if (v204 > v176) {
        var Decal = (v204 - v176) * 0.5;
        f138(1, 0, -Decal, v204, v204 - Decal);
    } else {
        var Decal = (v176 - v204) * 0.5;
        f138(1, -Decal, 0, v176 - Decal, v176);
    }
    var ScrollPosY = v176 * 0.47 - v302 * 0.5;
    var ScrollPosX = v301 * 0.5;
    if (ScrollPosX > 0) ScrollPosX = 0;
    gl.enable(gl.BLEND);
    for (var ScrollDecal = 0; ScrollDecal < 20; ScrollDecal++) {
        if (ScrollPosX + 1001 > 0) f138(2, ScrollPosX, ScrollPosY, ScrollPosX + 1001, ScrollPosY + 200);
        ScrollPosX += 1000;
        if (ScrollPosX > v204) break;
    }
}

function f216(ObjID) {
    f259(1);
    v231[ObjID].IsCrunchable = 0;
    v231[ObjID].MatIDStr = _Tx(377);
    v231[ObjID].MatID = 0;
    v231[ObjID].ExplosiveCounter = 0;
    var PolyBody = v231[ObjID].PhysicObject;
    var x = PolyBody.position[0];
    var y = PolyBody.position[1];
    var r = PolyBody.angle;
    for (var i = 0; i < WheelsCount; i++) {
        if (SceneWheels[i].Body != -1 && SceneWheels[i].ParentBody == PolyBody) {
            v290.removeConstraint(SceneWheels[i].Constraint);
            SceneWheels[i].Constraint = -1;
            f61(15);
            f60(0.05, 0);
            f92(2.0, 0.1);
            f62(SceneWheels[i].Radius * 2, 0, Math.random() * 360, (10.0 + Math.random() * 20));
            f45(SceneWheels[i].Body.position[0], SceneWheels[i].Body.position[1], -0.2, PolyBody.velocity[0] * 0.2, 10 + Math.random() * 5, 0.0);
            f199();
            SceneWheels[i].Body.position[0] = -1000;
            SceneWheels[i].AutoKill = 1;
        }
    }
    for (var l = 0; l < PolyBody.shapes.length; l++) {
        var child = PolyBody.shapes[l];
        var offset = child.position;
        var angle = child.angle;
        var vrot = p2.vec2.create();
        if (child instanceof p2.Convex) {
            for (var j = 0; j !== child.vertices.length; j++) {
                var v = child.vertices[j];
                p2.vec2.rotate(vrot, v, angle);
                var Va_X = PolyBody.position[0] + (vrot[0] + offset[0]);
                var Va_Y = PolyBody.position[1] + (vrot[1] + offset[1]);
                var NormX = (vrot[0] + offset[0]);
                var NormY = (vrot[1] + offset[1]);
                var length = Math.sqrt(NormX * NormX + NormY * NormY);
                if (length == 0) length = 0.000000001;
                NormX /= length;
                NormY /= length;
                var ExploForce = 5;
                f61(20);
                f60(0.05, 0);
                f92(2.0, 0.2);
                f62(15, -1, Math.random() * 360, (5.0 + Math.random() * 30) * 0.15);
                f45(Va_X, Va_Y, -0.2, NormX * ExploForce, NormY * ExploForce + 5 + Math.random() * 10, 0);
                f199();
            }
        }
    }
    while (PolyBody.shapes.length > 0) {
        PolyBody.removeShape(PolyBody.shapes[0]);
    }
    PolyBody.position[0] = 0;
    PolyBody.position[1] = 0;
    PolyBody.angle = 0;
    PolyBody.fromPolygon(v231[ObjID].Sv_ALT);
    v231[ObjID].Offset_X = PolyBody.position[0];
    v231[ObjID].Offset_Y = PolyBody.position[1];
    var shapC;
    for (shapC = 0; shapC < PolyBody.shapes.length; shapC++) {
        PolyBody.shapes[shapC].position[0] += v231[ObjID].Offset_X;
        PolyBody.shapes[shapC].position[1] += v231[ObjID].Offset_Y;
        PolyBody.shapes[shapC].material = v119;
        PolyBody.shapes[shapC].collisionGroup = GROUND;
        PolyBody.shapes[shapC].collisionMask = GROUND | v311 | CHASSIS;
    }
    PolyBody.position[0] = x;
    PolyBody.position[1] = y;
    PolyBody.angle = r;
    f263(x, y, 25);
    v158 += 5;
}
var v158 = 0;

function f217(ObjID) {
    v158 = 15;
    f259(4);
    var HorizontalCut = v204 * 0.55 / v254;
    if (v231[ObjID].Pos_X + v231[ObjID].Radius < -v301 - HorizontalCut || v231[ObjID].Pos_X - v231[ObjID].Radius > -v301 + HorizontalCut) return;
    v231[ObjID].MatIDStr = "Voiture_alt";
    v231[ObjID].MatID = 0;
    v231[ObjID].ExplosiveCounter = 0;
    v231[ObjID].IsExplosiv = 0;
    v231[ObjID].PhysicObject.velocity[1] += 15;
    v231[ObjID].PhysicObject.mass = 0.1;
    f216(ObjID);
    f61(14);
    f60(0.0, 0);
    f92(1.5, 0.05);
    f62(40, 2, Math.random() * 360, (10.0 + Math.random() * 20) * 0.01);
    f45(v231[ObjID].PhysicObject.position[0], v231[ObjID].PhysicObject.position[1], -0.2, 0.0, 1, 0.0);
    f199();
    f61(14);
    f60(0.0, 0);
    f92(2.0, 0.1);
    f62(40, -1, Math.random() * 360, -(10.0 + Math.random() * 20) * 0.01);
    f45(v231[ObjID].PhysicObject.position[0], v231[ObjID].PhysicObject.position[1], -0.2, 0.0, 0, 0.0);
    f199();
    f61(19);
    f60(0.0, 0);
    f92(2.0, 1.0);
    f62(100, -20, Math.random() * 360, (10.0 + Math.random() * 20) * 2.0);
    f45(v231[ObjID].PhysicObject.position[0], v231[ObjID].PhysicObject.position[1], -0.2, 0.0, 0, 0.0);
    f199();
    for (var i = 0; i < 5; i++) {
        f61(18);
        f60(0.05, 0);
        f92(2.0, 0.2);
        f62(14, 0, Math.random() * 360, (10.0 + Math.random() * 20) * 0.1);
        f45(v231[ObjID].PhysicObject.position[0], v231[ObjID].PhysicObject.position[1], -0.2, (-100 + Math.random() * 200) * 0.1, 25 + Math.random() * 20, 0.0);
        f199();
    }
    f263(v231[ObjID].PhysicObject.position[0], v231[ObjID].PhysicObject.position[1], 15);
    var P2Bodies = v290.bodies;
    for (i = 0; i < v66; i++) {
        var MyBody = P2Bodies[i];
        if (MyBody.type != p2.Body.STATIC && MyBody.id != ObjID &&
            MyBody.position[0] < v231[ObjID].PhysicObject.position[0] + 100 &&
            MyBody.position[0] > v231[ObjID].PhysicObject.position[0] - 100 &&
            MyBody.position[1] < v231[ObjID].PhysicObject.position[1] + 100 &&
            MyBody.position[1] > v231[ObjID].PhysicObject.position[1] - 100) {
            var ExploForce = 10 + Math.random() * 80;
            var NormX = MyBody.position[0] - v231[ObjID].PhysicObject.position[0];
            var NormY = MyBody.position[1] - v231[ObjID].PhysicObject.position[1];
            var length = Math.sqrt(NormX * NormX + NormY * NormY);
            if (length == 0) length = 0.000000001;
            NormX /= length;
            NormY /= length;
            MyBody.velocity[0] += NormX * ExploForce * 0.25;
            MyBody.velocity[1] += Math.abs(NormY * ExploForce);
            if (MyBody.position[0] < v231[ObjID].PhysicObject.position[0]) MyBody.angularVelocity += 1;
            else MyBody.angularVelocity -= 1;
            var ObjID_Bis = MyBody.id;
            if (ObjID_Bis != -1 && ObjID_Bis < 1000 && v231[ObjID_Bis].IsExplosiv == 1 && v231[ObjID_Bis].ExplosiveCounter == 0)
                v231[ObjID_Bis].ExplosiveCounter = 100 + Math.random() * 300;
            if (ObjID_Bis != -1 && ObjID_Bis < 1000 && v231[ObjID_Bis].IsExplosiv == 0 && v231[ObjID_Bis].Constraint != -1) {
                v290.removeConstraint(v231[ObjID_Bis].Constraint);
                v231[ObjID_Bis].Constraint = -1;
            }
            if ((ObjID_Bis != -1 && ObjID_Bis < 1000) && v231[ObjID_Bis].IsCrunchable == 1) f216(ObjID_Bis);
            if (ObjID_Bis > 1999 && SceneWheels[ObjID_Bis - 2000].Constraint != -1) {
                v290.removeConstraint(SceneWheels[ObjID_Bis - 2000].Constraint);
                SceneWheels[ObjID_Bis - 2000].Constraint = -1;
                f61(15);
                f60(0.05, 0);
                f92(2.0, 0.1);
                f62(SceneWheels[ObjID_Bis - 2000].Radius * 2, 0, Math.random() * 360, (10.0 + Math.random() * 20));
                f45(SceneWheels[ObjID_Bis - 2000].Body.position[0], SceneWheels[ObjID_Bis - 2000].Body.position[1], -0.2, MyBody.velocity[0] * 0.8, MyBody.velocity[1] * 1.0, 0.0);
                f199();
                SceneWheels[ObjID_Bis - 2000].Body.position[0] = -1000;
                SceneWheels[ObjID_Bis - 2000].AutoKill = 1;
            }
        }
    }
    /*
    f61(13);
    f60(0.0,0); f92(2.0,0.2);
    f62(10,20+Math.random()*3, Math.random()*360,(10.0+Math.random()*20)*0.1);
    f45(v231[ObjID].Pos_X,v231[ObjID].Pos_Y,-0.8,0.8,0);
    f199();
    */
}
var v233 = 0;

function f172() {
    var HorizontalCut = v204 * 0.55 / v254;
    for (var i = 0; i !== v290.narrowphase.contactEquations.length; i++) {
        var eq = v290.narrowphase.contactEquations[i];
        var bi = eq.bodyA;
        var xi = bi.position[0];
        var ri = eq.contactPointA;
        if (xi + ri[0] > -v301 - HorizontalCut && xi + ri[0] < -v301 + HorizontalCut) {
            var bj = eq.bodyB;
            var ri = eq.contactPointA;
            var rj = eq.contactPointB;
            var yi = bi.position[1];
            var xj = bj.position[0];
            var yj = bj.position[1];
            var VelA = bi.angularVelocity * 2;
            var VelB = bj.angularVelocity * 2;
            var AbsVelA = Math.abs(VelA);
            var AbsVelB = Math.abs(VelB);
            var VeloA = bi.velocity[0];
            var VeloB = bj.velocity[0];
            var AbsVeloA = Math.abs(VeloA);
            var AbsVeloB = Math.abs(VeloB);
            if (AbsVeloB > AbsVeloA) {
                AbsVeloA = AbsVeloB;
                VeloB = VeloA;
            }
            if (AbsVelB > AbsVelA) {
                AbsVelA = AbsVelB;
                VelB = VelA;
            }
            if (v251 == 5 && PlayerExploded == 0 && (bj.shapes[0].collisionGroup == CHASSIS || bi.shapes[0].collisionGroup == CHASSIS) && bi.shapes[0].material != v149 && bi.shapes[0].material != v149) {
                PlayerEnergy -= v260 * 0.05;
                if (v233 < 0) {
                    f259(3);
                    v233 = 10;
                } else v233 -= v260 * 0.1;
                if (PlayerExploded == 0 && PlayerEnergy < 0) {
                    v290.removeConstraint(v312);
                    v290.removeConstraint(v313);
                    v290.removeSpring(v314);
                    v290.removeSpring(v315);
                    v300.velocity[0] *= 0.5;
                    v300.velocity[1] += 62;
                    v299[0].velocity[0] -= 20;
                    v299[0].velocity[1] += 42;
                    v299[1].velocity[0] += 20;
                    v299[1].velocity[1] += 40;
                    v300.angularVelocity -= 2.8;
                    v299[1].angularVelocity += 2;
                    v299[0].angularVelocity -= 2;
                    PlayerExploded = 1;
                    window.famobi_analytics.trackScreen("SCREEN_LEVELRESULT");
                    v251 = 8;
                    Stanislic_SendInfo(_Tx(380));
                    f143();
                    f259(1);
                    f259(4);
                    v234 = 0;
                    v125 = 0;
                    f196(0, 100000 - Math.floor(PlayerScore), 0);
                }
                if (Math.random() > 0.5) {
                    f61(19);
                    f60(-0.1, 0);
                    f92(1.0, 0.8);
                    f62(6 + Math.random() * 15, 1.5, Math.random() * 360, 0.2);
                    f45(xi + ri[0] - 5 + Math.random() * 10, yi + ri[1] + 1, -0.2, VelA, 0.5 + Math.random() * AbsVelA * 2, 0);
                    f199();
                }
            }
            if ((bj.shapes[0].material == v186 || bi.shapes[0].material == v186)) {
                var ObjID = bi.id;
                var Bb = bi;
                var AltB = bj;
                if (ObjID == -1 || ObjID > 900) {
                    ObjID = bj.id;
                    Bb = bj;
                    var AltB = bi;
                }
                if ((ObjID != -1 && ObjID < 1000) && v231[ObjID].IsExplosiv == 1) {
                    f217(ObjID);
                    v231[ObjID].PhysicObject.position[0] = -100000;
                }
                if ((ObjID != -1 && ObjID < 1000) && v231[ObjID].IsCrunchable == 1) {
                    if (AltB.velocity[1] < -0.2 && (AltB.id == 1003 || AltB.id == 1002)) {
                        AltB.velocity[1] = 15;
                        f216(ObjID);
                    }
                }
            }
            if ((bj.shapes[0].material == v149 || bi.shapes[0].material == v149)) {
                if (bi.velocity[0] > 14 || bi.velocity[0] < -14) bi.velocity[0] *= 0.9;
                if (bj.velocity[0] > 14 || bj.velocity[0] < -14) bj.velocity[0] *= 0.9;
                bi.velocity[1] *= 0.9;
                bj.velocity[1] *= 0.9;
            } {}
            if (AbsVelA > 0.8 || AbsVeloA > 6.0) {
                VelA += VeloA * 0.1 + Math.random() * 3;
                if ((bj.shapes[0].material == v226 || bi.shapes[0].material == v226) && Math.random() > 0.5) {
                    f61(11);
                    f60(0.1, 0);
                    f92(1.0, 0.5);
                    f62(3 + Math.random() * 15, 0.5, Math.random() * 360, 0.1);
                    f45(xi + ri[0] - 5 + Math.random() * 10, yi + ri[1] + 1, -0.2, VelA, 0.5 + Math.random() * AbsVelA * 2, 0);
                    f199();
                } else
                if ((bj.shapes[0].material == v148 || bi.shapes[0].material == v148) && Math.random() > 0.5) {
                    f61(12);
                    f60(0.01, 0);
                    f92(1.0, 0.5);
                    f62(3 + Math.random() * 15, 0.5, Math.random() * 360, 0.1);
                    f45(xi + ri[0] - 5 + Math.random() * 10, yi + ri[1] + 4, -0.2, VelA, 0.5 + Math.random() * AbsVelA * 2, 0);
                    f199();
                } else
                if ((bj.shapes[0].material == v149 || bi.shapes[0].material == v149) && Math.random() > 0.5) {
                    f61(22);
                    f60(-0.01, 0);
                    f92(1.0, 0.5);
                    f62(3 + Math.random() * 20, 0.5, Math.random() * 360, 0.1);
                    f45(xi + ri[0] - 9 + Math.random() * 18, yi + ri[1] + 4, -0.2, VelA, 0, 0);
                    f199();
                }
            }
        }
    }
}

function f192(ObjID) {
    if (v231[ObjID].IsExplosiv == 1 && v231[ObjID].ExplosiveCounter == 0 && Math.abs(v231[ObjID].PhysicObject.velocity[0]) > 5) v231[ObjID].ExplosiveCounter = 100;
    if (v231[ObjID].ExplosiveCounter > 0) {
        if (Math.random() > 0.5) {
            f228(2);
            f181(5.0, 5.0, 1.0, 1.0);
        }
        v231[ObjID].ExplosiveCounter -= v260 * 0.1;
        if (v231[ObjID].ExplosiveCounter < 20) {
            f217(ObjID);
            v231[ObjID].PhysicObject.position[0] = -100000;
        }
    }
    f203();
    f231(v231[ObjID].Pos_X, v231[ObjID].Pos_Y, 0);
    f296(v231[ObjID].Rot, 0, 0, 1);
    f201(100 + v231[ObjID].MatID);
    gl.bindBuffer(gl.ARRAY_BUFFER, v231[ObjID].PositionBuffer);
    gl.vertexAttribPointer(v105[v141].vertexPositionAttribute, v231[ObjID].PositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, v231[ObjID].TextureCoordBuffer);
    gl.vertexAttribPointer(v105[v141].textureCoordAttribute, v231[ObjID].TextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v231[ObjID].IndexBuffer);
    f13(1);
    gl.drawElements(gl.TRIANGLES, v231[ObjID].IndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    v99 += v231[ObjID].IndexBuffer.numItems;
    f230();
    f228(1);
    f181(1.0, 1.0, 1.0, 1.0);
    if (v231[ObjID].AutoKill == 1 && v231[ObjID].PhysicObject != -1) {
        v231[ObjID].AutoKill = 0;
        v290.removeBody(v231[ObjID].PhysicObject);
        v231[ObjID].PhysicObject = -1;
    }
}

function f108() {
    var HorizontalCut = v204 * 0.55 / v254;
    var x, y, r, s;
    for (var i = 0; i < WheelsCount; i++) {
        if (SceneWheels[i].Body != -1) {
            x = SceneWheels[i].Body.position[0];
            s = SceneWheels[i].Radius;
            if ((x + s) > -v301 - HorizontalCut && (x - s) < -v301 + HorizontalCut) {
                if (SceneWheels[i].ParentBody.sleepState != p2.Body.SLEEPING) SceneWheels[i].Body.wakeUp();
                y = SceneWheels[i].Body.position[1];
                r = SceneWheels[i].Body.angle * 57.2958;
                f203();
                f231(x, y, 0);
                f203();
                f296(r, 0, 0, 1);
                f138(15, -s, s, s, -s);
                f230();
                f138(16, -s, s, s, -s);
                f230();
            }
            if (SceneWheels[i].AutoKill == 1) {
                v290.removeBody(SceneWheels[i].Body);
                SceneWheels[i].Body = -1;
            }
        }
    }
}

function f41() {
    var HorizontalCut = v204 * 0.55 / v254;
    f181(1.0, 1.0, 1.0, 1.0);
    f228(1);
    for (var i = 0; i < v5.length; i++) {
        ObjID = v5[i];
        if ((v231[ObjID].Pos_X + v231[ObjID].Radius) > -v301 - HorizontalCut && (v231[ObjID].Pos_X - v231[ObjID].Radius) < -v301 + HorizontalCut) {
            f192(ObjID);
        }
    }
}

function f87() {
    f181(1.0, 1.0, 1.0, 1);
    for (var i = 0; i < v156; i++) {
        var x = v291[i].x;
        var y = v291[i].y + Math.abs(f269(v277 * 3 + i * 45) * 25);
        f138(27, x - 16, y + 16, x + 16, y - 16);
        if (v300.position[0] + 40 > x && v300.position[0] - 40 < x && v300.position[1] + 40 > y && v300.position[1] - 40 < y) {
            f61(27);
            f60(0.0, 0);
            f92(1.0, 0.1);
            f62(25, 3.1, 180, 0);
            f45(x, y, -0.2, 0, 1, 0.0);
            f80(true);
            f199();
            PlayerCollectedBags++;
            v293 = 1;
            f263(x, y - 20, 25);
            v291[i].x = -5000;
            f259(6);
        }
    }
    /*
    v291.push;
    v291[v156]=new f73();
    v291[v156].x=parseFloat(OneLine[i+1].replace('PosX: ', ''))*LevelScale;
    v291[v156].y=parseFloat(OneLine[i+1].replace('PosY: ', ''))*LevelScale;
    v156++;
    */
}

function f109() {
    f172();
    var HorizontalCut = v204 * 0.55 / v254;
    f181(1.0, 1.0, 1.0, 1.0);
    f87();
    f181(1.0, 1.0, 1.0, 1.0);
    f228(1);
    var ObjID;
    for (var i = 0; i < v27.length; i++) {
        ObjID = v27[i];
        if ((v231[ObjID].Pos_X + v231[ObjID].Radius) > -v301 - HorizontalCut && (v231[ObjID].Pos_X - v231[ObjID].Radius) < -v301 + HorizontalCut) {
            f192(ObjID);
        }
    }
    f108();
    f156();
    f228(1);
    for (var i = 0; i < v10.length; i++) {
        ObjID = v10[i];
        if ((v231[ObjID].Pos_X + v231[ObjID].Radius) > -v301 - HorizontalCut && (v231[ObjID].Pos_X - v231[ObjID].Radius) < -v301 + HorizontalCut) {
            f192(ObjID);
        }
    }
}

function f149() {
    f228(2);
    for (var i = 0; i !== v290.narrowphase.contactEquations.length; i++) {
        var eq = v290.narrowphase.contactEquations[i];
        var bi = eq.bodyA,
            bj = eq.bodyB,
            ri = eq.contactPointA,
            rj = eq.contactPointB,
            xi = bi.position[0],
            yi = bi.position[1],
            xj = bj.position[0],
            yj = bj.position[1];
        f203();
        f231(xi + ri[0], yi + ri[1], 0);
        f181(10.0, 0.0, 0.0, 1);
        f138(1, -2, -1, 2, 1);
        f230();
        f203();
        f231(xj + rj[0], yj + rj[1], 0);
        f181(10.0, 10.0, 0.0, 1);
        f138(1, -1, -2, 1, 2);
        f230();
    }
    var P2Bodies = v290.bodies;
    for (i = 0; i < v66; i++) {
        var MyBody = P2Bodies[i];
        f203();
        f231(MyBody.position[0], MyBody.position[1], 0);
        f296(MyBody.angle * 57.2958, 0, 0, 1);
        f181(0.0, 10.0, 0.0, 1);
        f138(1, -0.3, 0, 0.3, 5);
        f181(0.0, 0.0, 10.0, 1);
        f138(1, 0, -0.3, 5, 0.3);
        f230();
        if (MyBody.sleepState != p2.Body.SLEEPING) f181(10.0, 0.0, 0.0, 1);
        else f181(0.0, 0.0, 0.0, 1.0);
        if (MyBody.type == p2.Body.STATIC) f181(0.0, 10.0, 10.0, 1.0);
        var l;
        for (l = 0; l < MyBody.shapes.length; l++) {
            var child = MyBody.shapes[l];
            var offset = child.position;
            var angle = child.angle;
            if (child instanceof p2.Circle) {
                var Steps = 36;
                for (r = 0; r < 360; r += Steps) {
                    var Va_X = MyBody.position[0] + f270(-MyBody.angle + r / 57.2958) * child.radius;
                    var Va_Y = MyBody.position[1] + f269(-MyBody.angle + r / 57.2958) * child.radius;
                    var Vb_X = MyBody.position[0] + f270(-MyBody.angle + (r + Steps) / 57.2958) * child.radius;
                    var Vb_Y = MyBody.position[1] + f269(-MyBody.angle + (r + Steps) / 57.2958) * child.radius;
                    var Dist = Math.sqrt(Math.pow((Va_X - Vb_X), 2) + Math.pow((Va_Y - Vb_Y), 2));
                    var Angle = -f247(Va_X, Va_Y, Vb_X, Vb_Y);
                    f203();
                    f231(Va_X, Va_Y, 0);
                    f296(Angle, 0, 0, 1);
                    f138(1, -0.3, -0.3, 0.3, Dist + 0.3);
                    f230();
                }
            }
            if (child instanceof p2.Convex) {
                var vrot = p2.vec2.create();
                var vrotB = p2.vec2.create();
                for (var j = 0; j !== child.vertices.length; j++) {
                    var NextJ = j + 1;
                    if (NextJ == child.vertices.length) NextJ = 0;
                    var v = child.vertices[j];
                    var vb = child.vertices[NextJ];
                    p2.vec2.rotate(vrot, v, angle);
                    p2.vec2.rotate(vrotB, vb, angle);
                    var Va_X = (vrot[0] + offset[0]);
                    var Va_Y = (vrot[1] + offset[1]);
                    var Vb_X = (vrotB[0] + offset[0]);
                    var Vb_Y = (vrotB[1] + offset[1]);
                    var Dist = Math.sqrt(Math.pow((Va_X - Vb_X), 2) + Math.pow((Va_Y - Vb_Y), 2));
                    var Angle = -f247(Va_X, Va_Y, Vb_X, Vb_Y);
                    f203();
                    f231(MyBody.position[0], MyBody.position[1], 0);
                    f296(MyBody.angle * 57.2958, 0, 0, 1);
                    f231((vrot[0] + offset[0]), (vrot[1] + offset[1]), 0);
                    f296(Angle, 0, 0, 1);
                    f138(1, -0.3, -0.3, 0.3, Dist + 0.3);
                    f230();
                }
            }
        }
    }
}
var v68 = 0.8;
var v93 = 1.8;
var v94 = 0;

function f246(Speed) {
    v93 = 4.0 + PlayerCarID * 0.1;
    var AccelVel = 0.001 + PlayerCarID * 0.002;
    v157 = v300.angularVelocity;
    if (keysDown[40] == 1 || v188 == 1) {
        v94 += v260 * AccelVel / Speed;
    } else
    if (keysDown[38] == 1 || v151 == 1) {
        v94 -= v260 * AccelVel / Speed;
    } else {
        v94 *= 0.5;
    }
    if (keysDown[37] == 1 || v187 == 1) v157 += v260 * 0.025 / Speed;
    if (keysDown[39] == 1 || Control_Right == 1) v157 -= v260 * 0.025 / Speed;
    if (v157 < -v68) v157 = -v68;
    if (v157 > v68) v157 = v68;
    if (v94 < -v93) v94 = -v93;
    if (v94 > v93) v94 = v93;
    v300.angularVelocity = v157;
    v299[1].angularVelocity = v94;
    v299[0].angularVelocity = v94;
}

function f193() {
    Pref_User_Sound = parseInt(f272(_Tx(382)));

    try{
        Pref_User_Sound = window.famobi.audio.isEnabled();
    } catch(e) {
    }

    if (Pref_User_Sound == null || isNaN(Pref_User_Sound)) Pref_User_Sound = 1;
    v76 = parseInt(f272(_Tx(383)));

    try{
        v76 = window.famobi.audio.isEnabled();
    } catch(e) {
    }

    if (v76 == null || isNaN(v76)) v76 = 1;
    v52 = parseInt(f272("UserAvatar"));
    if (v52 == null || isNaN(v52)) v52 = 1;
    PlayerMaxLevel = parseInt(f272(_Tx(384)));
    if (PlayerMaxLevel == null || isNaN(PlayerMaxLevel)) PlayerMaxLevel = 1;
    PlayerBestScore = parseInt(f272(_Tx(385)));
    if (PlayerBestScore == null || isNaN(PlayerBestScore)) PlayerBestScore = 0;
    v278 = f272(_Tx(386)) + "___";
    if (v278.length < 10) v278 = _Tx(387);
    var Tempv192 = f272(_Tx(388));
    if (Tempv192 != null && Tempv192.length > 10) v192 = Tempv192;
}

function f194() {
    f273("UserName", v101);
    f273("UserAvatar", v52);
    f273("UserSound", Pref_User_Sound);
    f273("UserMusic", v76);
    f273("MaxLevel", PlayerMaxLevel);
    f273("StarsLevel", v192);
    f273("BestScore", PlayerBestScore);
    f273("pl_ScoreTop", v278);
}

function f289() {

    f40(1, 0);
    f40(2, 0);
    f173();
    f204();
    f228(3);
    gl.enable(gl.BLEND);
    f181(0.0, 0.0, 0.0, 0.5);
    f183(v204 * 0.5 - 242 * v294, 42, v204 * 0.5 + 242 * v294, v176 - 35);
    f181(1.0, 0.5, 0.0, 1.0);
    f183(v204 * 0.5 - 240 * v294, 40, v204 * 0.5 + 240 * v294, v176 - 40);
    f228(2);
    f181(1.0, 1.0, 1.0, 1.0);
    if(true) {
        //New Pause Menu
        var LevelButton = f95(13, v204 * 0.5 - 90 * v294, 480, 1.3);
        var RestartButton = f95(15, v204 * 0.5 + 90 * v294, 480, 1.3);
        var ContinueButton = f95(14, v204 * 0.5, 300, 1.3);
        var CloseButton = f95(11, v204 * 0.5, 600, 0.8);
    } else {
        //Original Pause Menu
        var LevelButton = f95(13, v204 * 0.5 - 170 * v294, 350, 1.3);
        var RestartButton = f95(15, v204 * 0.5, 350, 1.3);
        var ContinueButton = f95(14, v204 * 0.5 + 170 * v294, 350, 1.3);
        var CloseButton = f95(11, v204 * 0.5 + 235 * v294, 45, 0.8);
    }
    if (CloseButton == 1) {
        window.famobi_analytics.trackScreen("SCREEN_LEVEL");
        v251 = 5;
        f259(5);
    }
    if (LevelButton == 1) {
        window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {levelName: ""+v190, reason: "quit"}).then(function() {
            f102(1);
            f102(2);
            f144("title");
            window.famobi_analytics.trackScreen("SCREEN_LEVELSELECT");
            v251 = 21;
            f259(5);
        });
    }
    if (RestartButton == 1) {
        window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {levelName: ""+v190, reason: "quit"}).then(function() {
            f102(1);
            f102(2);
            PlayerScore = 0;
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: PlayerScore});
            v251 = 3;
            f259(5);
        });
    }
    if (ContinueButton == 1) {
        window.famobi_analytics.trackScreen("SCREEN_LEVEL");
        v251 = 5;
        f259(5);
    }
    f228(2);
    f181(1.0, 0.5, 0.0, 1.0);
    f282(v249);
    f231(v204 * 0.5, 64, 0);
    f299(1.30 * v294, 1.30 * v294, 1);
    if (v162 == "tr") f299(0.7, 0.9, 1);
    if (v162 == "ru") f299(0.55, 0.6, 1);
    if (v162 == "pl") f299(0.7, 0.9, 1);
    if (v162 == "nl") f299(0.8, 0.9, 1);
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v289[14]);
    f231(0, 72, 0);
}
var v278 = "";

function f218(ID, x, y, s) {
    Score_PlayerMax = 100000 - PlayerBestScore;
    f249(0);
    if (v78 > 0) {
        v278 = "";
        for (var i = 0; i < 20; i++) {
            if (i < 20) {
                v278 += f179(i, 0) + ";" + f135(i, 0) + ";123;" + (100000 - f153(i, 0)) + ",";
            }
        }
        v78 = 0;
    }
    var Score_Avatar = "1";
    var Score_Name = "";
    var Score_Score = 0;
    var PlayerPosition = ID + 1;
    var OnScoreSplit = v278.split(",");
    var ScoreCount = OnScoreSplit.length;
    if (ID > -1 && ID < ScoreCount) {
        var LineScoreSplit = OnScoreSplit[ID].split(";");
        var LineScoreCount = LineScoreSplit.length;
        Score_Name = LineScoreSplit[0];
        Score_Avatar = LineScoreSplit[1];
        Score_Score = LineScoreSplit[3];
    } else {
        Score_Name = v101 + "";
        Score_Avatar = v52 + "";
        Score_Score = Math.floor(PlayerBestScore) + "";
        PlayerPosition = ScoresTable[0].PlayerRank;
    }
    if (typeof Score_Score === "undefined" || Score_Score < 1 || Score_Score > 99999) return;
    f181(1.0, 1.0, 1.0, 1.0);
    f203();
    f231(x, y, 0);
    f299(s, s, 1);
    f203();
    f231(34, 0, 0);
    f299(0.30, 0.30, 1);
    f38(_Tx(389) + Score_Avatar + ".jpg", 26);
    f230();
    f181(2, 2, 2, 1.0);
    f234(21, -5, -1, 0.2);
    f203();
    f231(-5, -12, 0);
    f299(0.25, 0.25, 1);
    f282(v249);
    f231(0, 0, -1);
    if (PlayerPosition > 99) f299(0.70, 1.0, 1);
    if (PlayerPosition > 999) f299(0.90, 1.0, 1);
    f181(3, 3, 3, 0.8);
    f212(PlayerPosition + "");
    f231(-3, -3, -1);
    f181(0, 0, 0, 1.0);
    f212(PlayerPosition + "");
    f230();
    f181(0, 0, 0, 1.0);
    f203();
    f231(56, -25, 0);
    f299(0.4, 0.5, 1);
    f282(v284);
    f212(Score_Name);
    f230();
    f181(1.5, 1.5, 1.5, 1.0);
    f203();
    f231(365, -25, 0);
    f299(0.4, 0.5, 1);
    f282(FontRight);
    f212(Score_Score + "");
    f230();
    f230();
    v123++;
}
var v95 = 0;
var v123 = 0;

function f264() {
    var HauteurDuScroll = (36 * 28) + v95 + 100 * v294;
    if (v95 < -HauteurDuScroll) v95 += HauteurDuScroll;
    v95 -= v260 * 0.005;
    if (v197 == 1) {
        v95 -= v260 * 0.2;
        if (MouseClick == 1) Stanislic_SendInfo(_Tx(390));
    }
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    f204();
    f228(3);
    gl.enable(gl.BLEND);
    f181(0.0, 0.0, 0.0, 0.5);
    f183(v204 * 0.5 - 242 * v294, 42, v204 * 0.5 + 242 * v294, v176 - 35);
    f181(1.0, 0.5, 0.0, 1.0);
    f183(v204 * 0.5 - 240 * v294, 40, v204 * 0.5 + 240 * v294, v176 - 40);
    f228(2);
    f181(1.0, 0.5, 0.0, 1.0);
    f282(v249);
    var CutSize = gl.drawingBufferHeight / 700;
    gl.viewport(0, CutSize * 40, gl.drawingBufferWidth, gl.drawingBufferHeight - CutSize * 185);
    f231(v204 * 0.5 - 220 * v294, 0, 0);
    f299(2.0 * v294, 2.6 * v294, 1);
    v123 = 0;
    for (var j = -20; j < 40; j++) {
        var i = j;
        if (i > 19) i -= 20;
        if (i > 19) i -= 20;
        if (i < 0) i += 20;
        var Posy = (j * 28) + v95 + 100 * v294;
        if (i == -1) Posy -= 15;
        if (Posy > -20 && Posy < 357) {
            if(!window.famobi.hasFeature("standalone") && window.famobi.hasFeature("leaderboard")) f218(i, 0, Posy, 0.6);
        }
    }
    f204();
    gl.enable(gl.BLEND);
    f228(2);
    f181(1.0, 1.0, 1.0, 0.3);
    f138(28, v204 * 0.5 - 240 * v294, 40, v204 * 0.5 + 240 * v294, 145)
    f138(28, v204 * 0.5 - 240 * v294, 130, v204 * 0.5 + 240 * v294, 145)
    f181(0.0, 0.0, 0.0, 0.4);
    f138(28, v204 * 0.5 - 240 * v294, 170, v204 * 0.5 + 240 * v294, 145)
    f228(2);
    f181(1.0, 1.0, 1.0, 1.0);
    f218(-1, v204 * 0.5 - 219, 97, 1.2);
    f228(1);
    var CloseButton = f95(11, v204 * 0.5 + 235 * v294, 45, 0.8);
    if (CloseButton == 1) {
        v251 = v120;
        f259(5);
    }
    f282(FontRight);
    var DecalAvatar = f211(v101) * 0.8;
    f203();
    f231(v204 - 16, 609, 0);
    f228(3);
    f181(0.0, 0.0, 0.0, 0.7);
    f183(-86 - DecalAvatar, 8, 16, 500);
    f228(1);
    f299(0.8, 0.9, 1);
    f181(0, 0, 0, 1);
    f212(v101);
    f230();
    f181(1.0, 1.0, 1.0, 1.0);
    f203();
    f231(v204 - 72 - DecalAvatar, 653, 0);
    f299(59 * 0.01, 49 * 0.01, 1);
    f38("datas/textures/avatars/" + v52 + ".jpg", 26);
    f230();
    if (f269(v277 * 10) > 0) f181(2.5, 2.5, 0, 1);
    f234(23, v204 - 72 - DecalAvatar, 653 + 5, 0.64);
    f181(1.0, 1.0, 1.0, 1.0);
    if (f175(v204 - 140 - DecalAvatar, 605, v204, 900) == 1) v251 = 11;
}

function f298() {
    var HauteurDuScroll = (36 * 28) + v95 + 100 * v294;
    if (v95 < -HauteurDuScroll) v95 += HauteurDuScroll;
    v95 -= v260 * 0.005;
    if (v197 == 1) {
        v95 -= v260 * 0.2;
        if (MouseClick == 1) Stanislic_SendInfo("High scores Scroll");
    }
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    f204();
    f228(3);
    gl.enable(gl.BLEND);
    f181(0.0, 0.0, 0.0, 0.5);
    f183(v204 * 0.5 - 242 * v294, 42, v204 * 0.5 + 242 * v294, v176 - 35);
    f181(1.0, 0.5, 0.0, 1.0);
    f183(v204 * 0.5 - 240 * v294, 40, v204 * 0.5 + 240 * v294, v176 - 40);
    f228(2);
    f181(1.0, 0.5, 0.0, 1.0);
    f282(v249);
    f181(1, 1, 1, 1);
    f282(v249);
    f203();
    f231(v204 * 0.5, 113, 0);
    f299(0.5, 0.5, 1);
    f181(0, 0, 0, 0.8);
    f212(v289[20]);
    f230();
    v101 = f167(0, v101, v204 * 0.5 + 1, 163, -1);
    var StartPos = v204 * 0.5 - 211;
    var EndPos = v204 * 0.5 + 210;
    var IconPosX = StartPos;
    var IconPosY = 296;
    f203();
    if (v52 > 0 && v52 < 25) {} else v52 = 1;
    var Sizzzz = 44;
    for (var i = 1; i < 25; i++) {
        if (i == v52) {
            f228(3);
            f181(1.0, 1.0, 0.0, 1.0);
            f183(IconPosX - Sizzzz, IconPosY - Sizzzz,
                IconPosX + Sizzzz, IconPosY + Sizzzz);
        }
        if (MouseClick == 1 && v303 > IconPosX - Sizzzz && v303 < IconPosX + Sizzzz && v304 > IconPosY - Sizzzz && v304 < IconPosY + Sizzzz) {
            MouseClick = -1;
            v52 = i;
        }
        f228(1);
        f203();
        f181(1.0, 1.0, 1.0, 1.0);
        f231(IconPosX, IconPosY, 0);
        f299(0.6, 0.6, 1.0);
        f38("datas/textures/avatars/" + i + ".jpg", 26);
        f181(1.0, 1.0, 1.0, 1.0);
        f230();
        IconPosX += 84;
        if (IconPosX > EndPos) {
            IconPosX = StartPos;
            IconPosY += 83;
        }
    }
    f203();
    f228(2);
    if (f176(v204 * 0.5 + 269 - 50, 0, v204 * 0.5 + 269 + 50, 100) == 1) {
        TextField_x = -5000;
        TextField_y = -5000;
        ShowAbout = 0;
        WindowsZoom = 0;
        window.famobi_analytics.trackScreen("SCREEN_LEVEL");
        v251 = 5;
        f194();
        Stanislic_SendInfo(_Tx(392));
        f196(0, 100000, 0);
    }
    f204();
    f228(3);
    f228(1);
    var CloseButton = f95(11, v204 * 0.5 + 235 * v294, 45, 0.9);
    if (CloseButton == 1) {
        if (v101.length < 3) v101 = "Pilot";
        v251 = 9;
        f259(5);
        f194();
    }
}

function f219() {
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    f204();
    f228(3);
    gl.enable(gl.BLEND);
    f181(0.0, 0.0, 0.0, 0.5);
    f183(v204 * 0.5 - 242 * v294, 42, v204 * 0.5 + 242 * v294, v176 - 35);
    f181(1.0, 0.5, 0.0, 1.0);
    f183(v204 * 0.5 - 240 * v294, 40, v204 * 0.5 + 240 * v294, v176 - 40);
    f228(1);
    //Unlock new Car Close Button
    var CloseButton = f95(11, v204 * 0.855, 100, 0.8);
    if (CloseButton == 1) {
        v251 = v120;
        f259(5);
    }
    var BoomZize = 300;
    f228(2);
    f181(1.0, 1.0, 1.0, 1.0);
    f203();
    f231(v204 * 0.5, 350, 0);
    f296(v277 * 20, 0, 0, 1);
    f138(19, -BoomZize, -BoomZize, BoomZize, BoomZize);
    f230();
    f181(1.0, 0.5, 0.0, 1.0);
    f282(v249);
    f203();
    f231(v204 * 0.5, 42, 0);
    f296(11 * v294, 0, 0, 1);
    f299(0.90 * v294, 1.0 * v294, 1);
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v289[22]);
    f231(0, 72, 0);
    f212(v289[23]);
    f230();
    f181(1.0, 1.0, 1.0, 1.0);
    f203();
    f231(v204 * 0.5 - 41, 290, 0);
    var CarScale = 8.0 * v294 + f270(v277 * 8) * 0.06;
    f299(CarScale, -CarScale, 1);
    f296(15 * v294, 0, 0, 1);
    f191(PlayerCarID - 1, 0);
    f230();
}

function f290() {
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    f204();
    f228(3);
    gl.enable(gl.BLEND);
    f181(0.0, 0.0, 0.0, 0.5);
    f183(v204 * 0.5 - 242 * v294, 42, v204 * 0.5 + 242 * v294, v176 - 35);
    f181(1.0, 0.5, 0.0, 1.0);
    f183(v204 * 0.5 - 240 * v294, 40, v204 * 0.5 + 240 * v294, v176 - 40);
    f228(1);
    f234(4, v204 * 0.5, 100, 0.5 * v294);
    var CloseButton = f95(11, v204 * 0.5 + 235 * v294, 45, 0.8);
    if (CloseButton == 1) {
        window.famobi_analytics.trackScreen("SCREEN_HOME");
        v251 = 1;
        f259(5);
    }
    f228(2);
    f181(1.0, 0.5, 0.0, 1.0);
    f282(v249);
    f231(v204 * 0.5, 200, 0);
    f299(0.30 * v294, 0.30 * v294, 1);
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v289[4]);
    f231(0, 72, 0);
    f181(2.0, 2.0, 2.0, 0.5);
    f212(v289[5]);
    f231(0, 350, 0);
    f203();
    f231(0, -194, 0);
    f181(1.0, 1.0, 1.0, 1.0);
    f38(_Tx(393), 26);
    f230();
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v289[6]);
    f231(0, 72, 0);
    f181(2.0, 2.0, 2.0, 0.5);
    f212(v289[7]);
    f231(0, 350, 0);
    f203();
    f231(0, -194, 0);
    f181(1.0, 1.0, 1.0, 1.0);
    f38(_Tx(394), 26);
    f230();
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v289[8]);
    f231(0, 72, 0);
    f181(2.0, 2.0, 2.0, 0.5);
    f212(v289[9]);
    f231(0, 350, 0);
    f203();
    f231(0, -194, 0);
    f181(1.0, 1.0, 1.0, 1.0);
    f38(_Tx(395), 26);
    f230();
    f181(2.0, 2.0, 2.0, 1.0);
    f212(v289[10]);
    f231(0, 72, 0);
    f181(2.0, 2.0, 2.0, 0.5);
    f212(v289[11]);
}
var v192 = _Tx(396);

function f291(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function f74() {
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    f228(3);
    gl.enable(gl.BLEND);
    f181(1.0, 1.0, 1.0, 0.9);
    f183(v204 * 0.5 - 222 * v294, 0, v204 * 0.5 + 222 * v294, v176);
    f228(2);
    var x = -1.5;
    var y = 0;
    var BoxSize = 50;
    if (v204 < v176 * 1.1) BoxSize = 40;
    for (var i = 0; i < 20; i++) {
        var IsLocked = 0;
        if (i + 1 > PlayerMaxLevel) IsLocked = 1;
        var PosX = v204 * 0.5 + x * 50 * 2.4;
        var PosY = 135 + y * BoxSize * 2.4;
        x++;
        if (x > 2) {
            x = -1.5;
            y++;
        }
        f228(3);
        if (IsLocked == 0) f181(1.0, 0.5, 0.0, 1.0);
        else f181(0.4, 0.4, 0.4, 1.0);
        if (MouseClick == 1 && IsLocked == 0 && v303 > PosX - 50 && v303 < PosX + 50 && v304 > PosY - BoxSize && v304 < PosY + BoxSize) {
            MouseClick = -1;
            v190 = i + 1;
            v251 = 3;
            f259(5);
        }
        f183(PosX - 50, PosY - BoxSize, PosX + 50, PosY + BoxSize);
        f228(2);
        if (IsLocked == 0) f181(1.0, 1.0, 1.0, 1.0);
        else f181(0.0, 0.0, 0.0, 0.5);
        f203();
        f231(PosX, PosY - 33, 0);
        f282(v249);
        f299(0.5, 0.5, 1);
        var LeveID = i + 1;
        if (LeveID < 10) LeveID = "0" + LeveID;
        f212(LeveID + "");
        var StarLeveInt = parseInt(v192[i]);
        f181(1.0, 1.0, 1.0, 1);
        if (StarLeveInt > 0) f181(2.0, 2.0, 1.0, 1);
        else f181(0.0, 0.0, 0.0, 0.25);
        f234(21, -54, 137, 0.25);
        if (StarLeveInt > 2) f181(2.0, 2.0, 1.0, 1);
        else f181(0.0, 0.0, 0.0, 0.25);
        f234(21, 54, 137, 0.25);
        if (StarLeveInt > 1) f181(2.0, 2.0, 1.0, 1);
        else f181(0.0, 0.0, 0.0, 0.25);
        f234(21, 0, 127, 0.3);
        f230();
    }
    f181(1.0, 1.0, 1.0, 1);
    if (v204 > 628) f150();
    var BackButton = f95(16, -100 + 165 * v294, 630, 1.0);
    f228(2);
    f181(0.0, 0.0, 0.0, 1);
    f282(v249);
    f231(v204 * 0.5, -100 + 111 * v294, 0);
    f299(0.65, 0.65, 1);
    f212(v289[13]);
    if (BackButton == 1) {
        window.famobi_analytics.trackScreen("SCREEN_CHARACTER");
        v251 = 2;
        f259(5);
    }
}
var v124 = [0, 3, 6, 9, 12, 15, 18];

function f110() {
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    f228(3);
    gl.enable(gl.BLEND);
    f181(1.0, 1.0, 1.0, 0.9);
    f183(v204 * 0.5 - 222 * v294, 0, v204 * 0.5 + 222 * v294, v176);
    f228(2);
    var posx, posy;
    var TruckScale = 1.0;
    if (v204 < v176 * 1.1) TruckScale = 0.8;
    for (var i = 0; i < 6; i++) {
        var IsLocked = 0;
        if (v124[i] > PlayerMaxLevel) IsLocked = 1;
        if (i == 0) {
            posx = v204 * 0.5 - 150 * TruckScale;
            posy = 140;
        }
        if (i == 1) {
            posx = v204 * 0.5 + 120 * TruckScale;
            posy = 140;
        }
        if (i == 2) {
            posx = v204 * 0.5 - 150 * TruckScale;
            posy = 140 + 195 * TruckScale;
        }
        if (i == 3) {
            posx = v204 * 0.5 + 120 * TruckScale;
            posy = 140 + 195 * TruckScale;
        }
        if (i == 4) {
            posx = v204 * 0.5 - 150 * TruckScale;
            posy = 140 + 195 * 2 * TruckScale;
        }
        if (i == 5) {
            posx = v204 * 0.5 + 120 * TruckScale;
            posy = 140 + 195 * 2 * TruckScale;
        }
        f203();
        f231(posx, posy, 0);
        var CarScale = 3.2 * v294 * TruckScale;
        if (IsLocked == 0) CarScale += f270(v277 * 4 + i * 45) * 0.06;
        f299(CarScale, -CarScale, 1);
        f296(11, 0, 0, 1);
        if (IsLocked == 1) f181(0.25, 0.25, 0.25, 1.0);
        else f181(1.0, 1.0, 1.0, 1.0);
        f191(i, IsLocked);
        if (IsLocked == 1) {
            f181(1.0, 1.0, 1.0, 1.0);
            f234(17, 0, -16, -0.17 * v294);
            f228(2);
            f282(v249);
            f299(0.12, -0.155, 1);
            f231(0, 61, 0);
            f212("LVL " + v124[i]);
        }
        f230();
        if (IsLocked == 0 && MouseClick == 1 && v303 > posx - CarScale * 30 && v303 < posx + CarScale * 40 && v304 < posy + CarScale * 40 && v304 > posy - CarScale * 15) {
            PlayerCarID = i + 1;
            window.famobi_analytics.trackScreen("SCREEN_LEVELSELECT");
            v251 = 21;
            f259(5);
        }
    }
    f150();
    //Remove Back Button to Home Screen

    if(famobi.audio != null && famobi.audio.hasControls()) {
        var BackButton = f95(16, -100 + 165 * v294, 630, 1.0);
        f228(2);
        f181(0.0, 0.0, 0.0, 1);
        f282(v249);
        f231(v204 * 0.5, -100 + 111 * v294, 0);
        f299(0.65, 0.65, 1);
        f212(v289[12]);
        if (BackButton == 1) {
            console.log("BackButton?");
            window.famobi_analytics.trackScreen("SCREEN_HOME");
            v251 = 1;
            f259(5);
        }
    }
}

function f150() {
    var LogoSize = 1.0;
    if (v204 < v176 * 1.1) LogoSize = 0.8;
    var buttonSize = 1.0;
    if (v204 < v176 * 1.1) buttonSize = 0.7;
    if (v76 > 1 || v76 < 0) v76 = 1;
    if (Pref_User_Sound > 1 || Pref_User_Sound < 0) Pref_User_Sound = 1;

    if(typeof window.famobi.audio == "undefined" || window.famobi.audio.hasControls()) {
        var MusicButton = f95(6 - v76, v204 - 60 * buttonSize, 60 * buttonSize * v294, buttonSize);
        if (MusicButton == 1) {
            MouseClick = -1;
            v76 = window.famobi_paused ? 0 : 1 - v76;
            f194();
            if (v76 == 0 || window.famobi_paused) f143();
            if (v76 == 1 && !window.famobi_paused) f144(-1);
            f259(5);
            if (v76 == 0) Stanislic_SendInfo(_Tx(397));
            if (v76 == 1) Stanislic_SendInfo(_Tx(398));

            window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {bgmVolume: v76, sfxVolume: Pref_User_Sound});
        }

        var SoundButton = f95(8 - Pref_User_Sound, v204 - 60 * buttonSize, 150 * buttonSize * v294, buttonSize);
        if (SoundButton == 1) {
            MouseClick = -1;
            Pref_User_Sound = window.famobi_paused ? 0 : 1 - Pref_User_Sound;
            f194();
            f259(5);
            if (Pref_User_Sound == 0) Stanislic_SendInfo(_Tx(399));
            if (Pref_User_Sound == 1) Stanislic_SendInfo(_Tx(400));
            window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {bgmVolume: v76, sfxVolume: Pref_User_Sound});
        }
    }
}

function f220() {
    v301 -= v260 * 0.01;
    v302 = -190;
    f148();
    var LogoSize = 1.0;
    if (v204 < v176 * 1.1) LogoSize = 0.8;
    f234(4, v204 * 0.5 - LogoSize * 18, 200 * v294, LogoSize);
    var buttonSize = 1.0;
    if (v204 < v176 * 1.1) buttonSize = 0.7;
    f150();
    if(window.famobi.hasFeature("credits")) {
        var AboutButton = f95(9, v204 - 60 * buttonSize, 240 * buttonSize * v294, buttonSize);
    }
    var offsetXPlayButton = 0;
    if(window.famobi.hasFeature("leaderboard") && !window.famobi.hasFeature("standalone")) {
        var ScoreButton = f95(12, v204 * 0.5 - 99, 470, 1.5 * v294);
        offsetXPlayButton = 99;
    }
    var PlayButton = f95(14, v204 * 0.5 + offsetXPlayButton, 470, (1.5 - f270(v277 * 8) * 0.02) * v294);
    f228(2);
    f181(1, 1, 1, 1);
    var LogoURL = _Tx(401);
    if (Monetisation_IsFamobi == 1) LogoURL = famobi_getMoreGamesButtonImage();
    var LogoX = f25(LogoURL);
    var LogoY = f20(LogoURL);
    if (LogoX > 8 && LogoY > 8) {
        var MaxSize = 240;
        var ScaleX = MaxSize / LogoX;
        var ScaleY = MaxSize / LogoY;
        var ScaleLogo = ScaleX;
        if (ScaleY < ScaleX) ScaleLogo = ScaleY;
        f203();
        f231(v204 * 0.5, 730 - LogoY * ScaleLogo * v294, 0);
        f299(ScaleLogo, ScaleLogo, 1);
        f38(LogoURL, 26);
        f230();
        if (v303 < v204 * 0.5 + LogoX * ScaleLogo * 0.5 && v303 > v204 * 0.5 - LogoX * ScaleLogo * 0.5 && v304 > 590 - LogoY * ScaleLogo * 0.5 && v304 < 590 + LogoY * ScaleLogo * 0.5 && v197 == 1) {
            if (Monetisation_IsFamobi == 1) famobi_moreGamesLink();
            else
                v258 = _Tx(402);
        } else v258 = "";
    }
    /*
    f228(2);
    f181(1.7,1.7,1.7,1);
    if (f270(v277*8)>0) f181(1.0,1.0,0.0,1);
    f282 (v249);
    f231(v204*0.5,400,0);
    f299(0.65,0.65,1);
    if (v100==1 )
    f212(v289[2]);
    else
    f212(v289[3]);
    */
    if (PlayButton == 1) {
        MouseClick = -1;
        window.famobi_analytics.trackScreen("SCREEN_CHARACTER");
        v251 = 2;
        f259(5);
    }
    if (AboutButton == 1) {
        window.famobi_analytics.trackScreen("SCREEN_CREDITS");
        v251 = 20;
        f259(5);
    }
    if (ScoreButton == 1) {
        v120 = v251;
        v251 = 9;
    }
}
var v28 = 0;

function f173() {
    f148();
    var i, j, k;
    f228(2);
    var CenterX = v204 * 0.5;
    var CenterY = v176 * 0.5;
    f231(CenterX, CenterY - v28, 0);
    if (v100 == 1 && v300.position[0] > v153 + 100) v28 = v28 * 0.95 + 5;
    else v28 *= 0.9;
    f299(v254, -v254, 1.0);
    f231(v301, v302, 0);
    if (v158 > 0) {
        f231(Math.random() * v158, Math.random() * v158, 0);
        v158 -= v260 * 0.06
    }
    var Bodies = v290.bodies;
    v66 = Bodies.length;
    for (i = 0; i < v66; i++) {
        var Body = Bodies[i];
        if (Body.mass != 0) {
            var ObjID = Body.id;
            if (ObjID != -1 && ObjID < 1000) {
                v231[ObjID].Pos_X = Body.position[0];
                v231[ObjID].Pos_Y = Body.position[1];
                v231[ObjID].Rot = Body.angle * 57.2958;
                if (v231[ObjID].IsMotor == 1) {
                    Body.angularVelocity = 0.1;
                }
                if (v231[ObjID].IsMotor == 2) {
                    Body.angularVelocity = f270(v277) * 0.2;
                }
                if (v231[ObjID].IsPlatform != 0) {
                    Body.angularVelocity *= 0.1;
                    Body.position[0] = (Body.position[0] + v231[ObjID].Start_X) * 0.5;
                    Body.velocity[0] *= 0.1;
                    Body.velocity[1] = f270(v277 + ObjID * 45) * 20;
                }
            }
        }
    }
    f41();
    if (v190 == 1) {
        if (v100 == 1) {
            f95(2, 80 + 7, 314 - 0, -0.12 + f270(v277 * 7) * 0.0025);
            f95(3, 80 + 9, 314 - 17, -0.12 + f270(v277 * 7 + 40) * 0.0025);
            f95(1, 80 + 11, 314 - 37, -0.12 + f270(v277 * 7 + 80) * 0.0025);
            f95(0, 80 + 13, 314 - 52, -0.12 + f270(v277 * 7 + 120) * 0.0025);
        } else {
            f95(24, 80 + 7, 314 - 0, -0.2 + f270(v277 * 7) * 0.005);
            f95(25, 80 + 9, 314 - 17, -0.2 + f270(v277 * 7 + 40) * 0.005);
            f95(27, 80 + 11, 314 - 37, -0.2 + f270(v277 * 7 + 80) * 0.005);
            f95(26, 80 + 13, 314 - 52, -0.2 + f270(v277 * 7 + 120) * 0.005);
        }
    }
    f288();
    f109();
}
var v234 = 0;
var v125 = 0;

function f265() {
    if (f17() == 1) return;

    if (v125 < 50) {
        if (MouseClick == 1) v125 = 50;
        v125 += v260 * 0.025;
    } else {
        if(!window.famobi_eventCalled) {
            window.famobi_eventCalled = true;

            setTimeout(function() {
                Promise.all([
                    window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {levelName: ""+v190, reason: "dead"})
                    ]).then(
                    function() {
                        window.famobi_showButton = true;
                    },
                    function() {
                        window.famobi_showButton = true;
                    }
                );
            }, 1500);
        }
    }
    f204();
    f228(1);
    var buttonSize = 1.0;
    if (v204 < v176 * 1.1) buttonSize = 0.7;
    f181(1.0, 1.0, 1.0, 1);

    if(window.famobi_showButton) {
        var ScoreButton = null;
        var PlayButton = f95(15, v204 * 0.7, 560, 1.2 * v294);
        var LevelsButton = f95(13, v204 * 0.3, 560, 1.2 * v294);

        //Enable/Disable Leaderboard
        if(window.famobi.hasFeature("leaderboard")) {
            ScoreButton = f95(12, v204 * 0.5 - 180, 580, 0.8 * v294);
            PlayButton = f95(15, v204 * 0.5, 560, (1.5 - f270(v277 * 8) * 0.02) * v294);
            LevelsButton = f95(13, v204 * 0.5 + 180, 580, 0.8 * v294);
        }

    }

    f228(2);
    f282(v249);
    f231(v204 * 0.5, 219, 0);
    f181(1.0, 1.0, 1.0, 1);
    f299(1.6, 1.6, 1);
    f296(-4, 0, 0, 1);
    f299(1000.0, 0.7, 1);
    f181(0.1, 0.1, 0.1, 1);
    f234(20, 0, 36, 0.9);
    f181(1.0, 1.0, 1.0, 1);
    f299(0.0005, 0.7, 1);
    f181(1.7, 1.7, 1.7, 1);
    f212(v289[19]);
    f181(0.0, 0.0, 0.0, 1);
    f299(0.7, 0.7, 1);
    f231(-10, 175, 0);
    f212(v289[16]);
    f231(-5, 65, 0);
    f299(1.7, 1.7, 1);
    f181(0.0, 0.0, 0.0, 1);
    f212(Math.floor(PlayerScore) + v289[21]);
    f231(0, -3, 0);
    f181(2.0, 0.5, 0.0, 1);
    if (v255 > 0) {
        v255 -= v260 * 0.0015;
        if (f270(v277 * 40) > 0) f181(2, 2, 0, 1.0);
    }
    f212(Math.floor(PlayerScore) + v289[21]);
    if (PlayerScore > 100 && v239 == 0) {
        PlayerScore -= 50;
        v255 = 1;
    } else
    if (PlayerScore > 20 && v239 == 0) {
        PlayerScore -= 10;
        v255 = 1;
    } else
    if (PlayerScore > 0 && v239 == 0) {
        PlayerScore--;
        v255 = 1;
    }

    f204();
    f228(1);
    f181(1.0, 1.0, 1.0, 1);
    f234(22, v204 * 0.5, 140, 0.7);

    if (window.famobi_showButton && ScoreButton == 1) {
        PlayerScore = 0;
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: PlayerScore});
        v120 = v251;
        v251 = 9;
        Stanislic_SendInfo(_Tx(403));
    }
    if (window.famobi_showButton && LevelsButton == 1) {
        PlayerScore = 0;
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: PlayerScore});
        MouseClick = -1;
        window.famobi_analytics.trackScreen("SCREEN_LEVELSELECT");
        v251 = 21;
        f259(5);
        Stanislic_SendInfo(_Tx(404));
    }
    if (window.famobi_showButton && PlayButton == 1) {
        PlayerScore = 0;
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: PlayerScore});
        MouseClick = -1;
        v251 = 3;
        f259(5);
        f194();
        Stanislic_SendInfo(_Tx(405));
    }
    window.famobi_showButton && f150();
}
var v159 = 0;
var v160 = 0;
var v126 = 0;
var v127 = 0;
var v235 = 0;
var v236 = 0;
var v193 = 0;
var v194 = 0;
var v292 = -1;
var v255 = 0;
var v293 = 0;
var v237 = 1;

function f130() {
    if (v251 == 5) {
        if (v100 == 0) {
            v160 = (v160 + 630) * 0.5;
            v236 = (v236 + 570) * 0.5;
            v159 = (v159 + 13) * 0.5;
            v237 = 1;
        } else {
            var buttonSize = 0.8;
            if (v204 < v176 * 1.15) buttonSize = 0.69;
            if (v204 < v176 * 0.8) buttonSize = 0.6;
            if (v204 > v176 * 1.15) {
                v160 = (v160 + 107) * 0.5;
                v236 = (v236 + 51) * 0.5;
                v159 = (v159 + 13) * 0.5
                v237 = 1;
            } else {
                v160 = (v160 + 700 - 326 * buttonSize) * 0.5;
                v236 = (v236 + 700 - 326 * buttonSize) * 0.5;
                v159 = (v159 + v204 - 20) * 0.5
                v237 = 0;
            }
        }
        v126 = 0;
        v127 = 0;
        v235 = 59;
        v193 = 0;
        v194 = 0;
        if (v130 < 1) PlayerBonus -= v260 * 0.003;
    }
    f181(1, 1, 1, 1.0);
    v159 += v126 * v260;
    v160 += v127 * v260;
    v235 += v193 * v260;
    v236 += v194 * v260;
    v193 *= 0.9;
    v194 *= 0.9;
    v126 *= 0.9;
    v127 *= 0.9;
    if (PlayerBonus < 0) PlayerBonus = 0;
    if (v237 == 1) f282(v284);
    else f282(FontRight);
    if (v237 == -1) f282(v249);
    f228(2);
    f181(1, 1, 1, 2.0);
    f203();
    f231(v159, v160, 0);
    f299(0.6, 0.7, 1);
    f212(v289[15] + " " + Math.floor(PlayerBonus));
    f230();
    f181(1, 1, 1, 2.0);
    var BageSize = 30;
    if (v293 > 0) {
        v293 -= v260 * 0.0015;
        if (f270(v277 * 35) < 0) {
            f181(2, 2.0, 0, 1.5);
            BageSize += 5;
        }
    }
    f282(v284);
    f203();
    f231(v235, v236, 0);
    var x = -23;
    var y = 35;
    f138(27, x - BageSize, y - BageSize, x + BageSize, y + BageSize);
    f299(0.6, 0.7, 1);
    f212(Math.floor(PlayerCollectedBags) + "/" + Math.floor(v156));
    f230();
    f181(1, 1, 1, 1.0);
    if (v251 == 5 && PlayerScore > 0) {
        f228(2);
        f282(v249);
        f203();
        f231(v204 * 0.5, 52, 0);
        f299(0.7, 0.7, 1);
        f181(0, 0, 0, 2.0);
        f212(PlayerScore + v289[21]);
        f231(0, -1, 0);
        f181(2, 0.6, 0, 1.0);
        if (v255 > 0) {
            v255 -= v260 * 0.0015;
            if (f270(v277 * 40) > 0) f181(2, 2.0, 0, 1.5);
        }
        f212(PlayerScore + v289[21]);
        f230();
        f181(1, 1, 1, 1.0);
        if (v292 != PlayerScore) {
            v292 = PlayerScore;
            v255 = 1;
        }
    } else {

    }
    f228(2);
}
var v161;
var v128;
var v129;
var v69;

function f195() {
    if (f17() == 1) return;

    if (v161 == 0) {
        v129 = 0;
        v128 += v260;
        if (v128 > 1000) {
            v128 = 0;
            v161 = 1;
        }
    }
    if (v161 == 1) {
        var Goal_x = v204 * 0.5;
        var Goal_y = 140;
        if (v235 < Goal_x + 10) v193 += v260 * 0.005;
        if (v235 > Goal_x - 10) v193 -= v260 * 0.005;
        if (v236 < Goal_y + 10) v194 += v260 * 0.005;
        if (v236 > Goal_y - 10) v194 -= v260 * 0.005;
        if (Math.abs(v193) < 1 && Math.abs(v194) < 1 && Math.abs(v235 - Goal_x) < 10 && Math.abs(v236 - Goal_y) < 10) {
            v129 = 0;
            if (PlayerCollectedBags > v156 * 0.24) v129 = 1;
            if (PlayerCollectedBags > v156 * 0.499) v129 = 2;
            if (PlayerCollectedBags > v156 - 1) v129 = 3;
            Stanislic_SendInfo(_Tx(406) + v190 + _Tx(407) + v129);
            famobi_LevelStars(v190 - 1, v129);
            var StarLeveInt = parseInt(v192[v190 - 2]);
            if (StarLeveInt < v129) {
                v192 = f291(v192, v190 - 2, v129 + "");
                f194();
            }
            v235 = -1000;
            v161 = 2;
            f259(5);
        }
    }
    if (v161 == 2) {
        v237 = -1;
        var Goal_x = v204 * 0.5;
        var Goal_y = 420;
        if (v159 < Goal_x + 10) v126 += v260 * 0.005;
        if (v159 > Goal_x - 10) v126 -= v260 * 0.005;
        if (v160 < Goal_y + 10) v127 += v260 * 0.005;
        if (v160 > Goal_y - 10) v127 -= v260 * 0.005;
        if (Math.abs(v126) < 1 && Math.abs(v127) < 1 && Math.abs(v159 - Goal_x) < 10 && Math.abs(v160 - Goal_y) < 10) {
            if (PlayerBonus > 25) {
                PlayerBonus -= 15;
                PlayerScore += 15;
            } else
            if (PlayerBonus > 0) {
                PlayerBonus--;
                PlayerScore++;
            }
            if (PlayerBonus == 0) {
                v159 = -1000;
                f196(0, 100000 - Math.floor(PlayerScore), 0);
                f259(5);
                v255 = 1;
                window.famobi_score.setLevelScore(v190 - 1, Math.max(0, PlayerScore - window.famobi_score.getCurrentScore()));
                v161 = 3;
            }
        }
    }
    if(v161 == 3) {

        v161 = 4;

        setTimeout(function() {
            Promise.all([
                window.famobi_analytics.trackEvent("EVENT_LEVELSUCCESS", {levelName: ""+(v190 - 1)}),
                window.famobi_analytics.trackEvent("EVENT_LEVELSCORE", {levelScore: window.famobi_score.getLevelScore(v190 - 1), levelName: ""+(v190 - 1)}),
                window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {totalScore: window.famobi_score.getTotalScore()})
            ]).then(
                function() {
                    v161 = 5;
                },
                function() {
                    v161 = 5;
                }
            );
        }, 1500);
    }
    f204();
    f228(1);
    var buttonSize = 1.0;
    if (v204 < v176 * 1.1) buttonSize = 0.7;
    f181(1.0, 1.0, 1.0, 1);
    if (v161 < 5) v69 = 1000;
    else v69 = (v69 + 580) * 0.5;
    var RetryButton = f95(15, v204 * 0.5 - 180, v69, 0.8 * v294);
    var PlayButtonTexture = 14;
    if (v190 == 21) PlayButtonTexture = 12;
    var PlayButton = f95(PlayButtonTexture, v204 * 0.5, v69 - 20, (1.5 - f270(v277 * 8) * 0.02) * v294);
    var LevelsButton = f95(13, v204 * 0.5 + 180, v69, 0.8 * v294);
    f228(2);
    f282(v249);
    f231(v204 * 0.5, 219, 0);
    f181(1.0, 1.0, 1.0, 1);
    f299(1.6, 1.6, 1);
    f296(-4, 0, 0, 1);
    f299(1000.0, 0.7, 1);
    f234(20, 0, 36, 0.9);
    f299(0.0005, 0.7, 1);
    if (v129 > 0) f181(2.0, 2.0, 1.0, 1);
    else f181(0.0, 0.0, 0.0, 0.75);
    f234(21, -132, -60, 0.6);
    if (v129 > 2) f181(2.0, 2.0, 1.0, 1);
    else f181(0.0, 0.0, 0.0, 0.75);
    f234(21, 132, -60, 0.6);
    if (v129 > 1) f181(2.0, 2.0, 1.0, 1);
    else f181(0.0, 0.0, 0.0, 0.75);
    f234(21, 0, -80, 0.8);
    f181(1.7, 1.7, 1.7, 1);
    f212(v289[17]);
    f181(0.0, 0.0, 0.0, 1);
    f299(0.7, 0.7, 1);
    f231(-10, 175, 0);
    f212(v289[16]);
    f231(-5, 65, 0);
    f299(1.7, 1.7, 1);
    f181(0.0, 0.0, 0.0, 1);
    f212(Math.floor(PlayerScore) + v289[21]);
    f231(0, -3, 0);
    f181(2.0, 0.5, 0.0, 1);
    if (v255 > 0) {
        v255 -= v260 * 0.0015;
        if (f270(v277 * 40) > 0) f181(2, 2, 0, 1.0);
    }
    f212(Math.floor(PlayerScore) + v289[21]);
    f204();
    f228(1);
    f181(1.0, 1.0, 1.0, 1);
    if (PlayerBestScore < PlayerScore) PlayerBestScore = PlayerScore;
    v161 === 5 && f150();
    if (RetryButton == 1) {
        v190--;
        MouseClick = -1;
        v251 = 3;
        f259(5);
        f194();
    }
    if (LevelsButton == 1) {
        f194();
        MouseClick = -1;
        window.famobi_analytics.trackScreen("SCREEN_LEVELSELECT");
        v251 = 21;
        f259(5);
        Stanislic_SendInfo(_Tx(408));
    }
    if (PlayButton == 1 && v190 != 21) {
        MouseClick = -1;
        v251 = 3;
        f259(5);
        f194();
        Stanislic_SendInfo(_Tx(409));
        f196(0, 100000 - Math.floor(PlayerScore), 0);
    }
    if (PlayButton == 1 && v190 == 21) {
        f102(1);
        f102(2);
        f144("title");
        window.famobi_analytics.trackScreen("SCREEN_LEVELSELECT");
        v251 = 21;
        f259(5);
        v190--;
        MouseClick = -1;
        f194();
        v120 = v251;
        v251 = 9;
        Stanislic_SendInfo(_Tx(410));
        f196(0, 100000 - Math.floor(PlayerScore), 0);
    }
}
var v294 = 1.0;
var v130;
var v195 = 0;

function f221() {
    v277 += v260 * 0.001;
    if (v277 > 360) v277 -= 360;
    v252 += v260 * 0.0005;
    if (v252 > 360) v252 -= 360;
    if (DataToDownload > 0 || v146 != 1) return;
    if (v259 == 106) {
        v276++;
        if (v276 == 3) v276 = 0;
        v259 = 0;
    }
    f204();
    f228(1);
    v294 = v294 * 0.8 + 0.2;
    if (v189 != v251) {
        v189 = v251;
        v294 = 0;
    }

    if(v251 == 21 && window.famobi_v251 != v251) {
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: 0});
    }
    window.famobi_v251 = v251;

    switch (v251) {
        case 0:
            Stanislic_SendInfo(_Tx(411));
            f251(0, 8, 1, 1, 121, 126);
            f251(1, 8, 124, 1, 244, 126);
            f251(2, 8, 247, 1, 367, 126);
            f251(3, 8, 370, 1, 490, 126);
            f251(4, 21, 340, 663, 1022, 1022);
            f251(5, 21, 525, 1, 605, 81);
            f251(6, 21, 609, 1, 690, 81);
            f251(7, 21, 525, 85, 605, 165);
            f251(8, 21, 609, 85, 690, 165);
            f251(9, 21, 525, 169, 605, 249);
            f251(10, 21, 609, 169, 690, 249);
            f251(11, 21, 694, 1, 776, 81);
            f251(12, 21, 778, 1, 897, 122);
            f251(13, 21, 901, 1, 1020, 122);
            f251(14, 21, 778, 126, 897, 247);
            f251(15, 21, 901, 126, 1020, 247);
            f251(16, 21, 525, 253, 633, 370);
            f251(17, 21, 637, 253, 952, 543);
            f251(18, 21, 1, 340, 395, 421);
            f251(20, 21, 4, 430, 155, 540);
            f251(21, 21, 399, 374, 633, 608);
            f251(22, 21, 161, 425, 395, 659);
            f251(23, 21, 2, 545, 157, 685);
            f251(24, 21, 246, 663, 336, 729);
            f251(25, 21, 246, 733, 336, 799);
            f251(26, 21, 246, 803, 336, 869);
            f251(27, 21, 246, 873, 336, 939);
            f91(true);
            f193();
            window.famobi_analytics.trackScreen("SCREEN_HOME");
            v251 = 1;
            f144("title");
            break;
        case 1:
            f220();
            break;
        case 2:
            f110();
            break;
        case 21:
            f74();
            break;
        case 20:
            f290();
            break;
        case 3:
            f144(_Tx(412));
            v251 = 4;
            f190();
            break;
        case 4:
            window.famobi_eventCalled = false;
            window.famobi_showButton = false;
            PlayerScore = window.famobi_score.getTotalScore(v190);
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: PlayerScore});
            window.famobi_score.setCurrentScore(PlayerScore);
            v130 = 4000;
            gl.clearColor(0.1, 0.1, 0.15, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            f204();
            f228(2);
            f181(0.7, 0.7, 0.7, 1);
            f282(v249);
            f231(v204 * 0.5, 300, 0);
            f299(0.7, 0.7, 1);
            f212(v289[1]);
            if (v90 == 1) f171();
            if (v90 == 2 && DataToDownload == 0) {
                window.famobi_analytics.trackEvent(v190 === lastLevelPlayed ? "EVENT_LEVELRESTART" : "EVENT_LEVELSTART", {levelName: ""+v190}).then(function() {
                    lastLevelPlayed = v190;
                    window.famobi_analytics.trackScreen("SCREEN_LEVEL");
                    v251 = 5;
                    PlayerEnergy = 100;
                    PlayerCollectedBags = 0;
                    PlayerBonus = 999;
                    PlayerExploded = 0;
                    v277 = 0;
                    var i;
                    for (i = 0; i < 50; i++) v290.step(1 / 10);
                    f142(0.5);
                    f259(10);
                    f142(1);
                    f126(1, 8, 0, true);
                    f126(2, 9, 0, true);
                });
            }
            break;
        case 5:
            v195 = v195 * 0.9 + Math.abs(v300.velocity[0] * 0.06) * 0.1;
            if (v195 < 0) v195 = 0;
            if (v195 > 1) v195 = 1;
            f40(1, 0.25 - v195 * 0.25);
            f40(2, v195);
            f246(2);
            v290.step(v260 * 0.003);
            f246(2);
            v290.step(v260 * 0.003);
            if (v300.velocity[0] > 10) v232 = v232 * 0.99 + 125 * 0.01;
            else
            if (v300.velocity[0] < -10) v232 = v232 * 0.99 - 125 * 0.01;
            else
                v232 *= 0.99;
            if (v300.position[0] + v232 < v229)
                v301 = v301 * 0.5 - (v300.position[0] + v232) * 0.5;
            else
                v301 = v301 * 0.9 - (v229) * 0.1;
            v302 = v302 * 0.5 - v300.position[1] * 0.5;
            if (v302 > -130) v302 = -130;
            var ZoomGoal = 3.5;
            if (v204 < v176) ZoomGoal = 2.5;
            ZoomGoal -= Math.abs(v232 * 0.01);
            v254 = v254 * 0.9 + ZoomGoal * 0.1;
            f173();
            if (v276 == 2)
                f149();
            f181(1.0, 1.0, 1.0, 1);

            //Mobile Control Button Size
            var buttonSize = 0.9;
            if (v204 < v176 * 1.15) buttonSize = 0.7;
            if (v204 < v176 * 0.8) buttonSize = 0.6;
            f204();
            f228(1);
            f181(1.0, 1.0, 1.0, 1);
            f234(18, v204 * 0.5, 39, 0.7);
            f228(3);
            f181(1.0, 0.5, 0.0, 1.0);
            var Energy_X = v204 * 0.5 - 83;
            if (PlayerEnergy < 0) PlayerEnergy = 0;
            if (PlayerEnergy > 100) PlayerEnergy = 100;
            f183(Energy_X, 24, Energy_X + 2.09 * PlayerEnergy, 47.5);
            f228(1);
            f181(1.0, 1.0, 1.0, 1);
            var PauseButton = f95(10, v204 - 40, 40 * v294, 0.8);
            if (PauseButton == 1) {
                window.famobi_analytics.trackScreen("SCREEN_PAUSE");
                v251 = 7;
                f259(5);
            }
            f130();
            if (v100 == 1) {
                f228(2);
                if (v187 == 1) f181(1, 1, 1, 1.0);
                else f181(1, 1, 1, 0.3);
                    /* CONTROL: Turn left */
                    v187 = f26(0, 100 * buttonSize, v176 - 120 * buttonSize, buttonSize * 1.5);
                if (Control_Right == 1) f181(1, 1, 1, 1.0);
                else f181(1, 1, 1, 0.3);
                    /* CONTROL: Turn right */
                    Control_Right = f26(1, 320 * buttonSize, v176 - 100 * buttonSize, buttonSize * 1.5);
                if (v188 == 1) f181(1, 1, 1, 1.0);
                else f181(1, 1, 1, 0.3);
                    /* CONTROL: Move left */
                    v188 = f26(2, v204 - 320 * buttonSize, v176 - 100 * buttonSize, buttonSize * 1.5);
                if (v151 == 1) f181(1, 1, 1, 1.0);
                else f181(1, 1, 1, 0.3);
                    /* CONTROL: Move right */
                    v151 = f26(3, v204 - 100 * buttonSize, v176 - 120 * buttonSize, buttonSize * 1.5);
                f181(1, 1, 1, 1.0);
            }
            f228(2);
            f282(v249);
            if (v130 > 0) {
                var InfoScale = v130 * 0.01;
                if (InfoScale > 1.0) InfoScale = 1.0;
                f228(2);
                f282(v249);
                f231(v204 * 0.5, 160 * InfoScale, 0);
                f181(1.0, 1.0, 1.0, 1);
                f299(1.6, 1.6, 1);
                f296(-4, 0, 0, 1);
                f299(1000.0, 0.7, 1);
                f299(1, InfoScale, 1);
                f234(20, 0, 36, 0.9);
                f299(0.0005, 0.7, 1);
                f181(1.7, 1.7, 1.7, 1);
                f212(v289[18] + " " + v190);
                v130 -= v260;
                if (keysDown[40] == 1 || v188 == 1 || keysDown[38] == 1 || v151 == 1 || keysDown[37] == 1 || v187 == 1 || keysDown[39] == 1 || Control_Right == 1) {
                    if (v130 > 100) v130 = 100;
                }
            }
            f204();
            f181(1, 1, 1, 1);
            if (v300.position[0] > v229 || 0 == 1) {
                window.famobi_analytics.trackScreen("SCREEN_LEVELRESULT");
                v251 = 6;
                f143();
                v190++;
                f102(1);
                f102(2);
                if (PlayerMaxLevel < v190) {
                    PlayerMaxLevel = v190;
                    var MaxCar = 0;
                    for (var i = 0; i < 6; i++) {
                        if (v124[i] > PlayerMaxLevel) {

                        } else {
                            MaxCar = i + 1;
                        }
                    }
                    if (v124.indexOf((v190-1)) >= 0) {
                        PlayerCarID = MaxCar;
                        v120 = v251;
                        v251 = 13;
                    }
                }
                f194();
                f259(10);
                f259(7);
                v161 = 0;
                v128 = 0;
            }
            break;
        case 6:
            v290.step(v260 * 0.003);
            v290.step(v260 * 0.003);
            v232 *= 0.99;
            v301 = v301 * 0.9 - v229 * 0.1;
            v302 = v302 * 0.9 - (v230 + 64) * 0.1;
            var ZoomGoal = 4.5;
            v254 = v254 * 0.98 + ZoomGoal * 0.02;
            f173();
            if (Math.abs(v301 + v229) < 10.0) f195();
            f204();
            f228(1);
            f130();
            break;
        case 7:
            f289();
            break;
        case 8:
            f102(1);
            f102(2);
            v290.step(v260 * 0.003);
            v290.step(v260 * 0.003);
            f173();
            if (v234 > 6) {
                f265();
            } else v234 += v260 * 0.003;
            break;
        case 9:
            window.famobi_analytics.trackScreen("SCREEN_OTHER", "SCREEN_LEADERBOARD");
            v251 = 10;
            v95 = 0;
            v123 = 0;
            break;
        case 10:
            f264();
            break;
        case 11:
            v251 = 12;
            break;
        case 12:
            f298();
            break;
        case 13:
            v251 = 14;
            break;
        case 14:
            f219();
            break;
    }
    f204();
    f228(2);
    f181(1, 1, 1, 1);
    if (v276 == 1) {
        f204();
        f228(2);
        f181(1, 0, 0, 2);
        f282(v284);
        f299(0.3, 0.3, 1);
        f212(_Tx(413) + v99);
        f231(0, 70, 0);
        f212(_Tx(414) + v303 + " " + v304);
        f231(0, 70, 0);
        f212(_Tx(415) + v212 + " " + v213);
        f231(0, 70, 0);
        f212(_Tx(416) + v66);
        f231(0, 70, 0);
        f212(_Tx(417) + v222 + " " + Monetisation_IsFamobi);
        f231(0, 70, 0);

        var tou;
        for (tou = 0; tou < v165; tou++) {
            f212(_Tx(429) + v96[tou].Touch_id + "] " + v96[tou].x + ", " + v96[tou].y);
            f231(0, 70, 0);
        }
        f181(1, 1, 1, 1);
    }
    v99 = 0;
};
// Compressed with KorbenDallasMultiPack
